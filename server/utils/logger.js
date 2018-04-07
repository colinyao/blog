const log4=require('../middleware/logger')

exports.getLogger=function(name){
  var logger = log4.getLogger(name);
  return logger;
}

exports.useLogger = function (app, logger) {//用来与express结合
    app.use(log4.connectLogger(logger || log4js.getLogger('default'), {
        format: '[:date :remote-addr :method :url :status :response-timems][:referrer HTTP/:http-version :user-agent]'//自定义输出格式
    }))
}
