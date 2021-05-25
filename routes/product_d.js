var express = require('express');
var router = express.Router();

router.get('/', (req, res)=>{
    res.render('product_d');
  });

  module.exports = router;