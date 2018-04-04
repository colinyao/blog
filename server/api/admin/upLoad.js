const ArticalModel = require('../../mongodb/db/artical.js')
const config=require('../../utils/index.js')

const fs = require('fs')
const methods = {
    fileUpLoad: (req, res, next) => {
        let imgFile=req.files.imgFile;    //获取文件对象
        fileHandler(imgFile,'imgFile').then((res)=>{
            res.send({code:200,rst:res.imgFile})
        })
    },
    multipleImgUpLoad:(req,res,next)=>{
        let imgFiles=req.files,    //获取文件对象
            imgsPromise=[];
        for(let img of imgFiles){
            imgsPromise.push(fileHandler(img))
        }
        Promise.all(imgsPromise).then(_res=>{
             res.send({code:200,rst:_res})
        })
    },
    articleUpLoad:(req,res,next)=>{
        let formData=req.body.formData,
            date=new Date();
        if(formData._id){  //更新操作
            ArticalModel.update({_id:formData._id},Object.assign({},formData,{'update_time':date})).then(result=>{
              res.json({
                  code:'200',
                  msg:'文章更新成功'
              })
            })
        }else{   //创建操作
            ArticalModel.create(Object.assign({},formData,{month:date.Format('yyyy-MM'),'update_time':date})).then(result=>{
              res.json({
                  code:'200',
                  msg:'文章保存成功'
              })
            })
        }
    }
}
function fileHandler(imgFile,key){  //key未指定下取文件filedname，即前端传递过来的filename
  return new Promise((resolve,reject)=>{
      tmpPath = imgFile.path,    //path指服务器临时存储文件地址
      date=new Date().getTime(),
      category=imgFile.mimetype.substring(0,imgFile.mimetype.indexOf('/')),
      type=imgFile.mimetype.substring(imgFile.mimetype.indexOf('/')+1),
      targetType=category=='image'?'images':category=='video'?'videos':'docs';  //判断文件类型，分配目录
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
           resolve({[key||imgFile.fieldname||'']:config.domain+'/'+targetPath})
        })
      })
  })

}
module.exports = methods
