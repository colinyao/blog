const ArticalModel = require('../../mongodb/db/artical.js')
const methods = {
     searchList:(req,res,next)=>{
          let condition=req.body.formData||{},
              pageIndex=condition.pageIndex||1,
              pageSize=condition.pageSize||20,
              searchCondition=condition.type?{type:condition.type}:'';
              total='',
          ArticalModel.find(searchCondition).count().then(result=>{
              if(!result){
                  throw '没有查询到符合'+JSON.stringify(searchCondition)+'条件的文章'
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
              throw '没有查询到符合'+JSON.stringify(condition)+'条件的文章'
            }
            res.json({
               code:'200',
               rst:result[0]||{}
            })
          })
     }
}
module.exports=methods;
