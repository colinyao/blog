const jwtAuth = require('../../jwt/jwtAuth.js')
const jwtCreate = require('../../jwt/jwtCreate.js')
const UserModel = require('../../mongodb/db/user.js')


const methods = {
     register:(req, res, next) => {

        let name = req.body.name;
        let password = req.body.password;
        //console.log(UserModel)

        UserModel.find({ name: name }).then((result) => {
                result.length ? 
                    res.json({
                        resultCode: '-1',
                        resultObject: '',
                        message: '用户名已存在'
                    }):
                    UserModel.create({name:name,password:password,level:1}).then((result)=>{
                          res.json({
                              resultCode:'200',
                              message:'用户创建成功'
                          })
                    })
            })

    },   
    login:(req, res, next) => {

        let name = req.body.name;
        let password = req.body.password;
        //console.log(UserModel)

        UserModel.find({ name: name }).then((result) => {
                result.length ? 
                result.password === password ?
                    res.json({ resultCode: '-1', resultMessage: '密码错误' }) :
                    res.json({ resultCode: '200', resultObject: { token: jwtCreate() } }) :
                    res.json({
                        resultCode: '-1',
                        resultObject: '',
                        message: '用户名不存在'
                    })
            })
            //res.end()
    }
}
module.exports = methods;
