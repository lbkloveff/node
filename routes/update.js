var express = require('express');
var router = express.Router();

router.get('/', (req, res)=>{
    res.render('update');
  });


  var id = null;
  var product_name = null;
  var supplier_id= null;
  var price= null;
  var inventory=null;
router.post("/up_post_data",function(req,res){
  id = req.body.id;
  product_name = req.body.product_name;
  supplier_id = req.body.supplier_id;
  price = req.body.price;
  inventory = req.body.inventory;
  res.json({"status":1})
})

router.get("/up_get_data",function(req,res){
  res.json({"status":1,"id":id,"product_name":product_name,"supplier_id":supplier_id,"price":price,"inventory":inventory})
})

  module.exports = router;