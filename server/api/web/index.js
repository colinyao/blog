
const crossDomain = require('../../middleware/crossDomain.js')

const search=require('../admin/search.js')
const collection=require('./collection')
const archive=require('./archive')
const topical=require('./topical')
const routes=(server)=>{

//查询文章列表
server.post('/api/searchList',search.searchList)
//查询文章
server.post('/api/searchArtical',search.searchArtical)

server.post('/api/searchCollection',collection.searchCollection)

server.post('/api/searchArchive',archive.searchArchive)

server.post('/api/searchTopical',topical.searchTopical)
}


module.exports=routes;
