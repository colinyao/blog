const UserSchema=require('../schema/user.js')
const mongoose=require('mongoose')

UserSchema.statics.findUser=(name)=>{
     Model.find({name:name},function(err,result){
             console.log(1)
     })
}





    

const Model=mongoose.model('Model',UserSchema)

module.exports=Model