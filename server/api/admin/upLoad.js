const jwtAuth = require('../../jwt/jwtAuth.js')
const UserModel = require('../../mongodb/db/upLoad.js')
const config=require('../../utils/index.js')
const fs = require('fs')
const methods = {
    fileUpLoad: (req, res, next) => {
        let imgFile=req.files.imgFile,    //获取文件对象
             tmpPath = imgFile.path,    //path指服务器临时存储文件地址
             date=new Date().getTime(), 
             type=imgFile.type.substring(imgFile.type.indexOf('/')+1),
             targetType=type=='image'?'images':type=='video'?'videos':'docs';  //判断文件类型，分配目录
             targetPath = 'uploads/'+targetType+'/' +date+'.'+type;
        fs.rename(tmpPath, targetPath, function(err) {   //移动文件从临时目录到指定目录
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
    },
    articleUpLoad:(req,res,next)=>{
        let content=req.body.content;
        res.send({
            content:content
        })
    }
}

module.exports = methods
