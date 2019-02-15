var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var usersignin = require('./routes/usersignin');
var usersignin_normal = require('./routes/usersignin_normal');
var usersignin_selected = require('./routes/usersignin_selected');
var usersignin_name_backstage = require('./routes/usersignin_name_backstage');

var index_article_backstage = require('./routes/index_article_backstage');
var index_clicknum_backstage = require('./routes/index_clicknum_backstage');
var get_clicktitle_backstage = require('./routes/get_clicktitle_backstage');
var nav_article_click_backstage = require('./routes/nav_article_click_backstage');
var readall_click_uptate_title_backstage = require('./routes/readall_click_uptate_title_backstage');

var contribute_article_backstage = require('./routes/contribute_article_backstage');
var contribute_article_detail_backstage = require('./routes/contribute_article_detail_backstage');

var classification_article_backstage = require('./routes/classification_article_backstage');

var article_detail_backstage1 = require('./routes/article_detail_backstage1');
var article_detail_backstage2 = require('./routes/article_detail_backstage2');

var article_detail_comment_insert_backstage1 = require('./routes/article_detail_comment_insert_backstage1');
var article_detail_comment_insert_backstage2 = require('./routes/article_detail_comment_insert_backstage2');
var article_detail_comment_insert_backstage3 = require('./routes/article_detail_comment_insert_backstage3');
var article_detail_comment_newnum_backstage = require('./routes/article_detail_comment_newnum_backstage');
var article_detail_comment_getnum_backstage = require('./routes/article_detail_comment_getnum_backstage');
var article_detail_getcomment_backstage = require('./routes/article_detail_getcomment_backstage');
var article_detail_comment_del_backstage = require('./routes/article_detail_comment_del_backstage');
var article_detail_comment_reducenum_backstage = require('./routes/article_detail_comment_reducenum_backstage');







var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/images', 'indextips.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret:'12345',
    cookie:{maxAge:60000},
    resave:false,
    saveUninitialized:true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'html')));
app.use(express.static(path.join(__dirname, 'videos')));



app.use('/', index);
app.use('/users', users);
app.post('/usersignin',usersignin);
app.post('/usersignin_normal',usersignin_normal);
app.post('/usersignin_selected',usersignin_selected);
app.post('/usersignin_name_backstage',usersignin_name_backstage);

app.post('/index_article_backstage',index_article_backstage);
app.post('/index_clicknum_backstage',index_clicknum_backstage);
app.post('/get_clicktitle_backstage',get_clicktitle_backstage);
app.post('/nav_article_click_backstage',nav_article_click_backstage);
app.post('/readall_click_uptate_title_backstage',readall_click_uptate_title_backstage);

app.post('/contribute_article_backstage',contribute_article_backstage);
app.post('/contribute_article_detail_backstage',contribute_article_detail_backstage);

app.post('/classification_article_backstage',classification_article_backstage);

app.post('/article_detail_backstage1',article_detail_backstage1);
app.post('/article_detail_backstage2',article_detail_backstage2);

app.post('/article_detail_comment_insert_backstage1',article_detail_comment_insert_backstage1);
app.post('/article_detail_comment_insert_backstage2',article_detail_comment_insert_backstage2);
app.post('/article_detail_comment_insert_backstage3',article_detail_comment_insert_backstage3);
app.post('/article_detail_comment_newnum_backstage',article_detail_comment_newnum_backstage);
app.post('/article_detail_comment_getnum_backstage',article_detail_comment_getnum_backstage);
app.post('/article_detail_getcomment_backstage',article_detail_getcomment_backstage);
app.post('/article_detail_comment_del_backstage',article_detail_comment_del_backstage);
app.post('/article_detail_comment_reducenum_backstage',article_detail_comment_reducenum_backstage);








app.locals.resoucePath="C:\\Users\\Lenovo\\Desktop\\毕业设计1";


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
