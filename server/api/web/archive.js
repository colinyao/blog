const ArticalModel = require('../../mongodb/db/artical.js')

const methods={
    searchArchive:(req,res,next)=>{
        ArticalModel.find().sort({update_time:1}).lean().then((result)=>{
          let _result={},_list=[];
          result.forEach(ele=>{
              if(ele.month in _result){
                  _result[ele.month].push(Object.assign({},ele,{update_time:new Date(ele.update_time).Format('yyyy-MM-dd')}))
              }else{
                 _result[ele.month]=[Object.assign({},ele,{update_time:new Date(ele.update_time).Format('yyyy-MM-dd')})]
              }
          })
          Object.keys(_result).sort().reverse().forEach(ele=>{
               _list.push({name:ele,list:_result[ele]})
          })
          res.json({
              code:'200',
              rst:{
                 list:_list
              }
          })
        })

    }
}
module.exports=methods;
