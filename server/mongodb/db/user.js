const UserSchema=require('../schema/user.js')
const db=require('../index.js')
const UserModel=db.model('User',UserSchema)







module.exports=UserModel