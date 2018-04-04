const jwtCreate = require('../../jwt/jwtCreate.js')
const UserModel = require('../../mongodb/db/user.js')


const methods = {
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
