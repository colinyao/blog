const restify = require('restify')
const ip_addr = '127.0.0.1'
const port =  '3000'
const server = restify.createServer({name : "server",version:'1.0.0'})
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

let web=require('./routes/web')
let admin=require('./routes/admin')

web(server)
admin(server)

server.listen(port ,ip_addr, ()=>{console.log('%s listening at %s ', server.name , server.url)})