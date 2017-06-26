const user=require('./user.js')
const crossDomain = require('../../middleware/crossDomain.js')
const routes=(server)=>{
server.post('/api/register', crossDomain , user.register)
server.post('/api/login', crossDomain , user.login)
}
module.exports=routes;