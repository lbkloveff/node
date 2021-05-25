var express = require('express');
var router = express.Router();
// var User=require('./bean/user');
const mysql=require('mysql');
var md5=require('md5');

var reg=mysql.createConnection({
host:'localhost',
port:3306,
user:'root',
password:'rootroot',
database:'nodejs'
});

/* GET users listing. */
router.get('/', (req, res)=>{
  res.render('reg');
});

router.post('/',(req,res)=>{
  var newpassword=req.body.password;
  var password=md5(newpassword)
  reg.query(('INSERT INTO customer_login VALUES(?,?,?)'),[req.body.name,password,req.body.tel],(err,result)=>{
    console.log(result)
  });

  res.redirect('/login');
});

module.exports = router;
