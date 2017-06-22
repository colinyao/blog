const UserSchema=require('../schema/user.js')
const db=require('../index.js')
const UserModel=db.model('User',UserSchema)
UserSchema.static.methods.findUser=(name)=>{
     return this.model()
}








module.exports=UserModel