var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');
var session = require('express-session');


var loginRouter = require('./routes/login');
var regRouter = require('./routes/reg');
var addressRouter = require('./routes/address');
var userRouter=require('./routes/user');
var bookRouter=require('./routes/book');
var contactRouter=require('./routes/contact');
var diplmaRouter=require('./routes/diploma');
var paywayRouter=require('./routes/payway');
var priceRouter=require('./routes/price');
var productRouter=require('./routes/product');
var product_dRouter=require('./routes/product_d');
var repwdRouter=require('./routes/repwd');
var searchRouter=require('./routes/search');
var shopcarRouter=require('./routes/shopcar');
var aboutRouter=require('./routes/about');
var indexRouter=require('./routes/index');
var product_listRouter=require('./routes/product_list');
var updateRouter=require('./routes/update');
var order_listRouter=require('./routes/order_list');
var order_updateRouter=require('./routes/order_update');
var order_detailRouter=require('./routes/order_detail');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); 
app.engine('.html',ejs.__express);
app.set('view engine', 'html');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ 
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie:{ 
      maxAge: 1000*60*60*24
  }
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/login',loginRouter);
app.use('/reg',regRouter);
app.use('/address',addressRouter);
app.use('/user',userRouter);
app.use('/book',bookRouter);
app.use('/contact',contactRouter);
app.use('/diploma',diplmaRouter);
app.use('/payway',paywayRouter);
app.use('/price',priceRouter);
app.use('/product',productRouter);
app.use('/product_d',product_dRouter);
app.use('/repwd',repwdRouter);
app.use('/search',searchRouter);
app.use('/shopcar',shopcarRouter);
app.use('/about',aboutRouter);
app.use('/index',indexRouter);
app.use('/product_list',product_listRouter);
app.use('/update',updateRouter);
app.use('/order_list',order_listRouter)
app.use('/order_update',order_updateRouter);
app.use('/order_detail',order_detailRouter);

//登录拦截
// app.use(function (req, res, next) {
//   var logger = log4js.getLogger("intercept");
//   if (req.session.user) {
//       //用户登录过
//       next();
//   } else {
//       //解析用户请求路径
//       var arr = req.url.split('/');
//       logger.info('请求路径拆分：' + JSON.stringify(arr));
//       //去除get请求携带的参数
//       for (var i = 0; i < arr.length; i++) {
//           arr[i] = arr[i].split('?')[0];
//       }

//       if (arr.length > 1) {
//           if (arr[1] === 'adminlogin' || arr[1] === 'adminlogout' || arr[1] === 'login_commit'||arr[1] === 'video') {
//               next();
//           } else {
//               logger.error('intercept：用户未登录执行登录拦截，路径为：' + arr[1]);
//               res.redirect('/adminlogin');  // 将用户重定向到登录页面
//               res.end();
//           }
//       }
//   }


// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
