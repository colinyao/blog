const jwtAuth=require('../../jwt/jwtAuth.js')
const UserModel=require('../../mongodb/db/user.js')
const crossDomain=require('../../middleware/crossDomain.js')
const routes=(server)=>{
     server.post('/api/login',crossDomain,(req,res,next)=>{

           let name=req.body.name;
           let password=req.body.password;
           UserModel.find({name:name},function(){
               console.log(1)
           })
           res.end()
     })
}
module.exports=routes;