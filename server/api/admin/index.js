const user=require('./user.js')
const crossDomain = require('../../middleware/crossDomain.js')

const upLoad=require('./upLoad.js')
const routes=(server)=>{
server.post('/api/register', crossDomain , user.register)
server.post('/api/login', crossDomain , user.login)

server.post('/api/editor/articleUpLoad',crossDomain,upLoad.articleUpLoad)
server.post('/api/editor/fileUpLoad',crossDomain,upLoad.fileUpLoad)
}
module.exports=routes;