var express = require('express');
var router = express.Router();

router.get('/', (req, res)=>{
    res.render('order_update');
  });

  var id=null;
  var re_name=null;
  var tel=null;
  var address=null;
  var order_money=null;
  var distrit=null;
router.post('/up_post_orderdata',(req,res)=>{
 id=req.body.id;
 re_name=req.body.re_name;
 tel=req.body.tel;
 address=req.body.address;
 order_money=req.body.order_money;
 distrit=req.body.distrit;
 res.json({"status":1});
})

router.get('/up_get_orderdata',function(req,res){
  res.json({"status":1,"id":id,"re_name":re_name,"tel":tel,"address":address,"order_money":order_money,"distrit":distrit})
})

module.exports = router;