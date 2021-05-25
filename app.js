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
var product_listRouter=require('./routes/product_list')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html',ejs.__express);
app.set('view engine', 'html');
// app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ 
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie:{ 
      maxAge: 60000
  }
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/login',loginRouter);
app.use('/reg',regRouter);
// app.use('/',teacherRouter);
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
