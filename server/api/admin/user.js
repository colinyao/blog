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
                        code: '-1',
                        rst: '',
                        msg: '用户名已存在'
                    }):
                    UserModel.create({name:name,password:password,level:1}).then((result)=>{
                          res.json({
                              code:'200',
                              msg:'用户创建成功'
                          })
                    })
            })

    },
    login:(req, res, next) => {

        let name = req.body.userName;
        let password = req.body.password;
        UserModel.find({ name: name }).then((result) => {
                result.length ?
                result.password === password ?
                    res.json({ code: '-1', msg: '密码错误' }) :
                    res.json({ code: '200', rst: { token: jwtCreate() } }) :
                    res.json({
                        code: '-1',
                        rst: '',
                        msg: '用户名不存在'
                    })
            })
            //res.end()
    }
}
module.exports = methods;
