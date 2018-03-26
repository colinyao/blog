const jwt=require('jwt-simple')
const config=require('./config.js')
module.exports=(req,res,next)=>{

     //tokn可能存在的位置
    let token=(req.body && req.body.authorization) ||(req.query.authorization) || req.headers['authorization'];
    if(token){
        try{
            let decoded=jwt.decode(token,config.secret);
            //token expire
            if(decoded.exp<=Date.now()){
                  res.end('Access token has expired',400)
            }
            next()
        }catch(err){
            return next()
        }
    }else{
        res.end('Access token is required',500)
    }
}
