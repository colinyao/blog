require('babel-polyfill')
const express = require('express')
const app=express()
const port =  '3000'
const path=require('path')
const bodyParser=require('body-parser')
const db=require('./mongodb')
const utils=require('./utils')
const log4=require('./middleware/logger')
utils.formatDate();

const crossDomain = require('./middleware/crossDomain.js')
app.use(crossDomain)
app.use(express.static(__dirname + '/uploads'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const logger = log4.getLogger('log_file');
app.use(log4.connectLogger(logger('log_file'), {format:':method :url'}));

const web=require('./api/web')
const admin=require('./api/admin')

db.on('error',(res)=>{
    console.log('数据库连接错误:'+res)
});
db.once('open',function(){
  //一次打开记录

 web(app)
 admin(app)
 console.log('mongodb is running')
});





app.listen(port, ()=>{console.log('%s listening at %s ', port)})
