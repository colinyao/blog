const restify = require('restify')
const ip_addr = '127.0.0.1'
const port =  '3000'
const server = restify.createServer({name : "server",version:'1.0.0'})
const assert = require('assert');
const path=require('path')
// var clients = require('restify-clients');
const db=require('./mongodb')

// var client = clients.createJsonClient({
//   url: 'http://localhost:3000',
//   version: '~1.0'
// });


server.get(/\/uploads\/?.*/, restify.serveStatic({
    directory: __dirname
}));
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());


// server.use(function crossDomain(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
// });

const web=require('./api/web')
const admin=require('./api/admin')

db.on('error',(res)=>{
    console.log('数据库连接错误:'+res)
});
db.once('open',function(){
  //一次打开记录

 web(server)
 admin(server)
 console.log('mongodb is running')
});





server.listen(port ,ip_addr, ()=>{console.log('%s listening at %s ', server.name , server.url)})