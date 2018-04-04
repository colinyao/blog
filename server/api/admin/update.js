let validation =require('../../utils/validate')
const ArticalModel = require('../../mongodb/db/artical.js')
const UserModel=require('../../mongodb/db/user')
const TypesModel =require('../../mongodb/db/types')
const methods = {
     addType:(req,res,next)=>{
        let type=req.body.type;
        TypesModel.distinct('type').then(result=>{
            if(!!~result.indexOf(type)){
                res.json({
                    code:'-1',
                    msg:'该类型已存在，请勿重复创建'
                })
            }else{
              TypesModel.create({type:type}).then(result=>{
                  res.json({
                      code:'200',
                      msg:'更新成功'
                  })
              })
            }
        })

     },
     updateMain:(req,res,next)=>{
          let {userName,motto}=req.body.formData;
          UserModel.update({},{userName,motto}).then(result=>{
              res.json({
                 code:'200',
                 msg:'更新成功'
              })
          })
     },
     deleteAll:(req,res,next)=>{
         let id=req.body.id;
         let validate=new validation(res);
         validate.addList('id',id,['noEmpty','isArray'])
         if(validate.start()){
             id=id.map(ele=>({'_id':ele}));
             ArticalModel.remove({'$or':id}).then(result=>{
                 res.json({
                     code:'200',
                     msg:'删除成功'
                 })
             })
         }
     },
     deleteImg:(req,res,next)=>{
         let imgUrl=req.imgUrl;
         //删除文件
         fs.unlink(imgUrl, function() {
             if (err) {
                 throw err;
             }
             res.json({
               code:'200',
               msg:'删除成功'
             })
          })
     },
     deleteArtical:(req,res,next)=>{
         let id=req.body.id;
         let validate=new validation(res);
         validate.addList('id',id,'noEmpty')
         if(validate.start()){
           ArticalModel.remove({_id:id}).then(result=>{
               res.json({
                   code:'200',
                   msg:'删除成功'
               })
           })
         }


     }
}
module.exports=methods;
