const ArticalModel = require('../../mongodb/db/artical.js')
const methods = {
     searchArtical:(req,res,next)=>{
          let condition=req.body.formData,
              pageIndex=condition.pageIndex||1,
              pageSize=condition.pageSize||20,
              searchCondition=condition.type?{type:condition.type}:'';
              total='',
          ArticalModel.find(searchCondition).count().then(result=>{
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
     }
}
module.exports=methods;
