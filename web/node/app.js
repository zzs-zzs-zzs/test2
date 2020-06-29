const express=require('express');
var bodyParser = require('body-parser')

//导入路由
const router=require('./router');

const app=express();





app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



//安装路由
app.use(router);



app.listen(3000,function(){
    console.log('running3000');
    
})