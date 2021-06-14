var express = require('express');
var router = express.Router();
var connection=require('./config');



router.get('/', (req, res)=>{
    res.render('product_d');
  });


router.get('/get_list',function(req,res){
  var query='select * from product_pic_info where product_id = "HC0008131"';
  connection.query(query,function(err,rows){
    if(err){
     console.log(err);
        return;
    }
      res.json(rows);
    })
  })

module.exports = router;