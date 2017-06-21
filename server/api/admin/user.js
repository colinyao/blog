let jwtAuth=require('../../jwt/jwtAuth.js')
const routes=(server)=>{
     server.post('/api/login',(req,res,next)=>{
           let name=req.body.name;
           let password=req.body.password;
           console.log(name)
     })
}
module.exports=routes;