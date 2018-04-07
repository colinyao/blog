const ArticalModel = require('../../mongodb/db/artical.js')
const UserModel=require('../../mongodb/db/user')
const TypesModel =require('../../mongodb/db/types')
const log4js= require('../../utils/logger')
const othlogger = log4js.getLogger('oth')
const errlogger=log4js.getLogger('err')

// const loggerError=require('../../middleware/loggerError').getLogger('log_errorFile')

const methods = {
     searchMain:(req,res,next)=>{
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
              searchCondition=condition.type?{type:condition.type}:'',
              total='';

          ArticalModel.find(searchCondition).count().then(result=>{
              if(!result){
                  errlogger.error(`${res.req.url} 没有查询到符合${JSON.stringify(searchCondition)}条件的文章列表`);
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
              errlogger.error(`${res.req.url} 没有查询到符合${JSON.stringify(searchCondition)}条件的文章`);
            }
            res.json({
               code:'200',
               rst:result[0]||{}
            })
          })
     }
}
module.exports=methods;
