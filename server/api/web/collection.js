const ArticalModel = require('../../mongodb/db/artical.js')
const UserModel = require('../../mongodb/db/user.js')
const methods={
    searchCollection:(req,res,next)=>{

        Promise.all([UserModel.find(),ArticalModel.find().sort({update_time:1}).limit(8).lean(),ArticalModel.distinct('type')]).then((result)=>{

            let _result=result[1].slice(0,8);


            res.json({
                code:'200',
                rst:{
                   userInfo:{
                        userName:result[0][0].userName,
                        avator:result[0][0].avator,
                        motto:result[0][0].motto
                   },
                   labels:result[2]||[],
                   latestArticals:_result.map(ele=>Object.assign({},ele,{update_time:new Date(ele.update_time).Format('yyyy-MM-dd')}))
                }
            })
        })
    }
}
module.exports=methods;
