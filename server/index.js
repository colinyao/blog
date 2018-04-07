require('babel-polyfill')
const express = require('express')
const app=express()
const port =  '3000'
const path=require('path')
const bodyParser=require('body-parser')
const db=require('./mongodb')
const utils=require('./utils')
const log4=require('./utils/logger.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/'));

utils.formatDate();
const crossDomain = require('./middleware/crossDomain.js')
app.use(crossDomain)
//将路由router信息加入到日志中
log4.useLogger(app,log4.getLogger())

const web=require('./api/web')
const admin=require('./api/admin')

db.on('error',(res)=>{
    console.log('数据库连接错误:'+res)
});
db.once('open',function(){
  //一次打开记录

 web(app)
 admin(app)
});





app.listen(port, ()=>{console.log('%s listening at %s ', port)})
