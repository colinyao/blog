const log4 = require('log4js');


log4.configure({
  replaceConsole: true,
  appenders: {
      stdout: {//控制台输出
          type: 'stdout'
      },
      req: {//请求日志
          type: 'file',
          filename: __dirname+'/../logs/reqlog/reqlog.log',
          pattern: 'req-yyyy-MM-dd.log',
          alwaysIncludePattern: true,
          maxLogSize : 1024,//文件最大存储空间，当文件内容超过文件存储空间会自动生成一个文件test.log.1的序列自增长的文件
          backups : 1,//当文件内容超过文件存储空间时，备份文件的数量
          encoding : 'utf-8',//default "utf-8"，文件的编码
          numBackups: 5, // keep five backup files
          compress: true, // //是否以压缩的形式保存新文件,默认false。如果true，则新增的日志文件会保存在gz的压缩文件内，并且生成后将不
      },
      err: {//错误日志
          type: 'dateFile',
          filename: __dirname+'/../logs/errlog/',
          pattern: 'err-yyyy-MM-dd.log',
          alwaysIncludePattern: true
      },
      oth: {//其他日志
          type: 'dateFile',
          filename: __dirname+'/../logs/othlog/',
          pattern: 'oth-yyyy-MM-dd.log',
          alwaysIncludePattern: true
      }
  },
  categories: {
      default: { appenders: ['stdout', 'req'], level: 'debug' },//appenders:采用的appender,取appenders项,level:设置级别
      err: { appenders: ['stdout', 'err'], level: 'error' },
      oth: { appenders: ['stdout', 'oth'], level: 'info' }
  }
});

module.exports=log4
