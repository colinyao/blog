const ArticalModel = require('../../mongodb/db/artical.js')
const config=require('../../utils/index.js')
const fs = require('fs')
const methods = {
    fileUpLoad: (req, res, next) => {
        let imgFile=req.files.imgFile;    //获取文件对象
        fileHandler('imgFile',imgFile).then((res)=>{
            res.send({code:200,rst:res.imgFile})
        })
    },
    multipleImgUpLoad:(req,res,next)=>{
        let imgFiles=req.files,    //获取文件对象
            imgsPromise=[];
        for(var img in imgFiles){
            imgsPromise.push(fileHandler(img,imgFiles[img]))
        }
        Promise.all(imgsPromise).then(_res=>{
             res.send({code:200,rst:_res})
        })
    },
    articleUpLoad:(req,res,next)=>{
        let formData=req.body.formData;
        if(formData.id){  //更新操作
            ArticalModel.update({_id:formData.id},Object.assign({},formData,{'update_time':new Date()})).then(result=>{
              res.json({
                  code:'200',
                  msg:'文章更新成功'
              })
            })
        }else{   //创建操作
            ArticalModel.create(formData).then(result=>{
              res.json({
                  code:'200',
                  msg:'文章保存成功'
              })
            })
        }
    }
}
function fileHandler(key,imgFile){
  return new Promise((resolve,reject)=>{
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
           resolve({[key]:config.domain+'/'+targetPath})
        })
      })
  })

}
module.exports = methods
