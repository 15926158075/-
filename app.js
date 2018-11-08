//使用express构建web服务器 --11:25
const express = require('express');
const bodyParser = require('body-parser');
/*引入路由模块*/
const course=require('./routes/course.js');
const login=require('./routes/login.js');
const left_more=require('./routes/left_more.js');
const shopping_cart=require('./routes/shopping_cart.js');


var app = express();
var server = app.listen(3000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('public'));
/*使用路由器来管理路由*/
app.use("/course",course);
app.use("/login",login);
app.use("/left_more",left_more);
app.use("/shopping_cart",shopping_cart);

// app.use("/details",details);
