const mongoose = require('mongoose');    //引用mongoose模块
mongoose.connect('localhost','blog')
const db = mongoose.connection; //创建一个数据库连接
mongoose.Promise = require('bluebird');  //mongoose虽然支持then方法，但不是完整的promise，需要引用外部依赖


module.exports=db

