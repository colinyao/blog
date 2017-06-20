const mongoose = require('mongoose');    //引用mongoose模块
const db = mongoose.createConnection('localhost','blog'); //创建一个数据库连接


db.on('error',console.error.bind(console,'连接错误:'));
db.once('open',function(){
  //一次打开记录
});

module.exports=db

