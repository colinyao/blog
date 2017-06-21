const mongoose = require('mongoose');    //引用mongoose模块
const db = mongoose.createConnection('localhost','blog'); //创建一个数据库连接



module.exports=db

