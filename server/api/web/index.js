
const crossDomain = require('../../middleware/crossDomain.js')

const search=require('../admin/search.js')
const routes=(server)=>{

//查询文章列表
server.post('/api/searchList',search.searchList)
//查询文章
server.post('/api/searchArtical',search.searchArtical)
}
module.exports=routes;
