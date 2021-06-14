var express = require('express');
var router = express.Router();
var crypto = require('crypto');
const mysql=require('mysql');
// var mysql = require ('./database')

/* GET users listing. */
router.get('/', (req, res) => {
  res.render('login',{message:""});
});

var login=mysql.createConnection({
  host:'localhost',
  port:3306,
  user:'root',
  password:'rootroot',
  database:'nodejs'
  });


router.post('/',(req,res,next) => {
  var name =req.body.name;
  var password =req.body.password;
  var tel=req.body.tel;
  var hash = crypto.createHash('md5');
  hash.update(password);
  password=hash.digest('hex');
  var query='SELECT * FROM customer_login WHERE name='+ mysql.escape(name) + ' AND password = ' +mysql.escape(password);
   login.query(query,function(err,rows,fields){
     if(err){
       console.log(err);
       return;
     }
     var user =rows[0];
     if(!user){
       res.render('login',{message:'用户名或密码错误'});
       return;
     }
     req.session.userSign=true;
     req.session.username=user.name;
     res.redirect('/product')
   });

});
module.exports = router;