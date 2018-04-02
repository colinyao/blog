const user=require('./user.js')
const jwtAuth=require('../../jwt/jwtAuth')
const upLoad=require('./upLoad.js')
const search=require('./search.js')
const routes=(server)=>{
server.use('/api/editor',jwtAuth)  //验证token
// server.post('/api/register' , user.register)
server.post('/api/login' , user.login)

server.post('/api/editor/articleUpLoad',upLoad.articleUpLoad)
server.post('/api/editor/fileUpLoad',upLoad.fileUpLoad)
server.post('/api/editor/multipleImgUpLoad',upLoad.multipleImgUpLoad)

server.post('/api/editor/searchList',search.searchList)
server.post('/api/editor/searchArtical',search.searchArtical)
}
module.exports=routes;
