const jwt=require('jwt-simple')
const config=require('./config.js')
module.exports=(payload)=>{
    let token=jwt.encode(Object.assing({},payload,exp:config.expires),config.secret)
    return token;
}