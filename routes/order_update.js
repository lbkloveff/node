var express = require('express');
var router = express.Router();

router.get('/', (req, res)=>{
    res.render('order_update');
  });

  module.exports = router;