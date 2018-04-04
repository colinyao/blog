const user=require('./user.js')
const jwtAuth=require('../../jwt/jwtAuth')
const upLoad=require('./upLoad.js')
const search=require('./search.js')
const update=require('./update')
const uploadMiddle=require('../../middleware/upload')
const routes=(server)=>{
server.use('/api/editor',jwtAuth)  //验证token
// server.post('/api/register' , user.register)
server.post('/api/login' , user.login)

server.post('/api/editor/articleUpLoad',upLoad.articleUpLoad)
server.post('/api/editor/fileUpLoad',upLoad.fileUpLoad)
server.post('/api/editor/multipleImgUpLoad',uploadMiddle.any(),upLoad.multipleImgUpLoad)

server.post('/api/editor/searchList',search.searchList)
server.post('/api/editor/searchArtical',search.searchArtical)

server.post('/api/editor/searchMain',search.searchMain)

server.post('/api/editor/addType',update.addType)
server.post('/api/editor/updateMain',update.updateMain)

server.post('/api/editor/deleteAll',update.deleteAll)
server.post('/api/editor/deleteArtical',update.deleteArtical)
server.post('/api/editor/deleteImg',update.deleteImg)
}
module.exports=routes;
