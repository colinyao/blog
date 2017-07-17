const jwtAuth = require('../../jwt/jwtAuth.js')
const UserModel = require('../../mongodb/db/upLoad.js')

const methods={
    fileUpLoad:(req,res,next)=>{
         console.log(req.files)
         res.end(200)
    }
}

module.exports=methods