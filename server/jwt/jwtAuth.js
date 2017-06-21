const jwt=require('jwt-simple')
const config=require('./config.js')
module.exports=(req,res,next)=>{
     //tokn可能存在的位置
    let token=(req.body && req.body.access_token) ||(req.query.req.query.access_token) || req.headers['x-access-token']; 
    if(token){
        try{
            let decoded=jwt.decode(token,config.secret);
            //token expire
            if(decoded.exp<=Date.now()){
                  res.end('Access token has expired',400)
            }  
        }catch(err){
            return next(0)
        }
    }else{
        res.end('Access token is required',500)
    }
}