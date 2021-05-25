var express = require('express');
var router = express.Router();
var connection=require('./config');

router.get('/', (req, res)=>{
    res.render('product_list');
  });

router.get("/get_list",function(req,res){
  var query='select * from product_info';
  connection.query(query,function(err,rows){
    if(err){
      console.log(err);
      return;
    }
    res.json(rows);
  })
})

// 新增
router.get("/addpage",(req,res)=>{
  res.render("add")
});

router.post('/add',function(req,res){
  var id=req.body.id;
  var product_name=req.body.product_name;
  var supplier_id=req.body.supplier_id;
  var price=req.body.price;
  var inventory=req.body.inventory;
  connection.query('insert into product_info(id,product_name,supplier_id,price,inventory) values(" '+id+'"," '+product_name+'"," '+supplier_id+'"," '+price+'"," '+inventory+'")',function(err,rws){
    if(err){
      console.log(err);
      return;
    }
    res.redirect("/product_list")
  })
})


//删除
router.post("/del",function(req,res){
  var id =req.body.id;
  var query='delete from product_info where id = '+id+'';
  connection.query(query,(err,results,firelde)=>{
    if(err){
      console.log(err);
      return;
    }
    res.json({"result":"yes"})
  })
})

//修改
router.get("/up",(req,res)=>{
  res.render("update")
});

router.post('/update',function(req,res){
  var id=req.body.uid;
  var product_name=req.body.uproduct_name;
  var supplier_id=req.body.usupplier_id;
  var price=req.body.uprice;
  var inventory=req.body.uinventory;
  var query='update product_info set  product_name="'+product_name+'" , supplier_id="'+supplier_id+'" , price="'+price+'" , inventory="'+inventory+'" where id = '+id+'';
  connection.query(query,function(err,rows){
    if(err){
      console.log(err);
      return;
    }
    res.redirect("/product_list")
  })
}) 

//查询
router.post('/select',function(req,res){
  var all=req.body.all_v;
  var query='select * from product_info where concat(id,product_name,supplier_id,price,inventory) like "%'+all+'%"'
  
  connection.query(query,function(err,rows){
    if(err){
      console.log(err);
    }
    res.send(rows)
  })
})


module.exports = router;