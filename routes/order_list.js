var express = require('express');
var router = express.Router();
var connection=require('./config');

router.get('/', (req, res)=>{
    res.render('order_list');
  });

router.get('/get_list',(req,res)=>{
  var query='select * from order_list';
  connection.query(query,function(err,rows){
    if(err){
      console.log(err);
      return;
    }
    res.json(rows);
  })
})

//添加订单信息
router.get('/addpage2',(req,res)=>{
  res.render('add_order')
})

router.post('/add_order',function(req,res){
  var id=req.body.id;
  var re_name=req.body.re_name;
  var tel=req.body.tel;
  var address=req.body.address;
  var order_money=req.body.order_money;
  var distrit=req.body.distrit;
  connection.query('insert into order_list(id,re_name,tel,address,order_money,distrit) values(" '+id+'"," '+re_name+'"," '+tel+'"," '+address+'"," '+order_money+'"," '+distrit+'")',function(err,rows){
    if(err){
      console.log(err);
      return;
    }
    res.redirect("/order_list")
  })
})

//删除订单信息
router.post("/del",function(req,res){
  var id =req.body.id;
  var query='delete from order_list where id = '+id+'';
  connection.query(query,(err,results,firelde)=>{
    if(err){
      console.log(err);
      return;
    }
    res.json({"result":"yes"})
  })
})

//查询
router.post('/select',function(req,res){
  var all=req.body.all_v;
  var query='select * from order_list where concat(id,re_name,tel,address,order_money,distrit) like "%'+all+'%"'
  
  connection.query(query,function(err,rows){
    if(err){
      console.log(err);
    }
    res.send(rows)
  })
})

//修改
  
router.post('/order_update',function(req,res){
  var id=req.body.nid;
  var re_name=req.body.nre_name;
  var tel=req.body.ntel;
  var address=req.body.naddress;
  var order_money=req.body.norder_money;
  var distrit=req.body.ndistrit
  var query='update order_list set re_name="'+re_name+'" , tel="'+tel+'" , address="'+address+'" , order_money="'+order_money+'" ,distrit=" '+distrit+' "  where id = '+id+'';
  connection.query(query,function(err,rows){ 
    if(err){
      console.log(err);
      return;
    }
    res.redirect("/order_list")
  })
}) 

module.exports = router;