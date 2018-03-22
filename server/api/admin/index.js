const user=require('./user.js')
const crossDomain = require('../../middleware/crossDomain.js')

const upLoad=require('./upLoad.js')
const search=require('./search.js')
const routes=(server)=>{
server.use(crossDomain)
server.post('/api/register' , user.register)
server.post('/api/login' , user.login)

server.post('/api/editor/articleUpLoad',upLoad.articleUpLoad)
server.post('/api/editor/fileUpLoad',upLoad.fileUpLoad)
server.post('/api/editor/multipleImgUpLoad',upLoad.multipleImgUpLoad)

server.post('/api/editor/searchList',search.searchArtical)
}
module.exports=routes;
