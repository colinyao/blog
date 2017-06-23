const restify = require('restify')
const ip_addr = '127.0.0.1'
const port =  '3000'
const server = restify.createServer({name : "server",version:'1.0.0'})
const db=require('./mongodb')
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());


const web=require('./api/web')
const admin=require('./api/admin')

db.on('error',console.error.bind(console,'连接错误:'));
db.once('open',function(){
  //一次打开记录

 web(server)
 admin(server)
 console.log('mongodb is running')
});





server.listen(port ,ip_addr, ()=>{console.log('%s listening at %s ', server.name , server.url)})