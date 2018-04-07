const log4js= require('./logger')
const errlogger=log4js.getLogger('err')
const methods={
    noEmpty:(val)=>{
        if(val==''||val===null||val===undefined){
           return {valid:false,msg:'不能为空'}
        }
        return {valid:true}
    },
    isArray:(val)=>{
        if(!Array.isArray(val)){
            return {valid:false,msg:'必须为数组'}
        }
        return {valid:true}
    },
    isObject:(val)=>{
        if(typeof val==='object' && val!==null && !Array.isArray(val)){
            return {valid:true}
        }
        return {valid:false,msg:'必须为对象'}
    }
}

const validation=function(res){
   this.list=[];
   this.res=res;
}
validation.prototype={
    constructor:validation,
    addList(key,val,rule,msg){
        if(!methods.noEmpty(key)){throw 'key is not defined'}
        this.list.push({
            key:key,
            val:val,
            rule:rule,
            msg:msg
        })
    },
    start(){
        let result={},message=[];
            this.list.forEach(ele=>{
                if(typeof ele.rule==='function'){
                    result=ele.rule(ele.val);
                }else if(Array.isArray(ele.rule)){
                    let _valid=true,_message='';
                    ele.rule.forEach(_ele=>{
                        let _res=methods[_ele](ele.val)
                        if(!_res.valid){
                           _valid=false;
                           _message+=_message?'、'+_res.msg:_res.msg;
                        }
                    })
                    result={valid:_valid,msg:_message}
                }else{
                    result=methods[ele.rule](ele.val)
                }
                if(!result.valid){
                    message.push(ele.key+result.msg)
                }
            })
           if(message.length){
              errlogger.error(`${this.res.req.url} ${message.join(',')}`)
              this.res.json({
                  code:'-1',
                  msg:message.join(',')
              })
              return false
           }else{
              return true
           }
    }
}

module.exports=validation
