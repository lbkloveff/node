var express = require('express');
var router = express.Router();
var connection=require('./config');

router.get('/', (req, res)=>{
    res.render('order_detail');
  });

router.get("/get_list",function(req,res){
    var query='select * from order_detail';
    connection.query(query,function(err,rows){
      if(err){
        console.log(err);
        return;
      }
      res.json(rows);
    })
})

  module.exports = router;