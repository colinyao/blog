const jwtAuth = require('../../jwt/jwtAuth.js')
const UserModel = require('../../mongodb/db/upLoad.js')
const config=require('../../utils/index.js')
const fs = require('fs')
const methods = {
    fileUpLoad: (req, res, next) => {

        let imgFile=req.files.imgFile,
             tmpPath = imgFile.path,
             date=new Date().getTime(),
             type=imgFile.type.substring(imgFile.type.indexOf('/')+1),
             targetPath = 'uploads/images/' +date+'.'+type;
        fs.rename(tmpPath, targetPath, function(err) {
            if (err) {
                throw err;
            }
            //删除临时文件
            fs.unlink(tmpPath, function() {
                if (err) {
                    throw err;
                }
                res.send({
                    "error": 0,
                    "url": config.domain+'/'+targetPath 
                })
            })
        })

    }
}

module.exports = methods
