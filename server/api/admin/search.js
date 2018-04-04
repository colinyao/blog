const ArticalModel = require('../../mongodb/db/artical.js')
const UserModel=require('../../mongodb/db/user')
const TypesModel =require('../../mongodb/db/types')
const logger=require('../../utils/logger').logger('log_file')

// const loggerError=require('../../middleware/loggerError').getLogger('log_errorFile')

const methods = {
     searchMain:(req,res,next)=>{
         logger.info("首页查询！");
         //loggerError.error('查询错误了')
         Promise.all([UserModel.findOne(),TypesModel.find().lean()]).then(result=>{
             res.json({
                 code:'200',
                 rst:{
                     userInfo:{userName:result[0].userName,motto:result[0].motto},
                     types:result[1]
                 }
             })
         })
     },
     searchList:(req,res,next)=>{
          let condition=req.body.formData||{},
              pageIndex=condition.pageIndex||1,
              pageSize=condition.pageSize||20,
              searchCondition=condition.type?{type:condition.type}:'';
              total='',
          ArticalModel.find(searchCondition).count().then(result=>{
              if(!result){
                  logger.error(`没有查询到符合${JSON.stringify(searchCondition)}条件的文章`);
              }
              total=Math.ceil(result/pageSize);
              return ArticalModel.find(searchCondition).skip((pageIndex-1)*pageSize).limit(pageSize).lean()
          }).then(result=>{
            let _result=result;

            res.json({
                code:'200',
                rst:{
                   total:total,
                   list:_result.map(ele=>Object.assign({},ele,{update_time:new Date(ele.update_time).Format('yyyy-MM-dd')}))
                }
            })
          })
     },
     searchArtical:(req,res,next)=>{
          let condition=req.body.formData;
          ArticalModel.find(condition).then(result=>{
            if(!result.length){
              logger.error(`没有查询到符合${JSON.stringify(searchCondition)}条件的文章`);
            }
            res.json({
               code:'200',
               rst:result[0]||{}
            })
          })
     }
}
module.exports=methods;
