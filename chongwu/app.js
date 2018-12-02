//构建web服务器
const express=require('express');
const bodyParser=require('body-parser');
const session = require('express-session');//引入session模块
const user=require('./routes/user.js');
const index=require('./routes/index.js');
const details=require('./routes/details.js');
const list=require('./routes/list.js');
const cart=require('./routes/cart.js');
const nav=require('./routes/nav.js');
const cookieParase = require('cookie-parser');//引入模块
var app=express();
app.listen(3000);//监听3000端口


//托管静态资源
app.use(express.static('./public'));

//使用body-parser中间键
app.use(bodyParser.urlencoded({
	extended:false
}));
app.use(session({//使用session
	secret: '128位随机字符串',
	resave: false,
	saveUninitialized: true,
  }))
app.use(cookieParase());//使用cookie-parser
  //req.session
//托管静态资源到public目录下
app.use(express.static('public'));



//挂载
app.use('/user',user);
app.use('/index',index);
app.use('/details',details);
app.use('/list',list);
app.use('/cart',cart);
app.use('/nav',nav);
