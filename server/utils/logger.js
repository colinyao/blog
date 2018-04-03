const log4=require('./middleware/logger')
exports.logger=function(name){
  var logger = log4.getLogger(name);
  logger.setLevel('INFO');
  return logger;
}
