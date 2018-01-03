'use strict';
(function(myClass){
    if (typeof define === 'function' && define.amd) {
        define(function(){return myClass});   //define调用时，会自动执行函数
    } else if (typeof exports === 'object') {
        module.exports = myClass;
    } else {
        root.Pagination = myClass;
    }
})(function(){
    var Pagination=function(options){
          var defaultOptions={
               totalPages:0,
               maxBtnLength:8,
               btnText:true
          }
          this.options=merge(defaultOptions,options);
          this.init();
    }
    Pagination.prototype={
        constructor:Pagination,
        init(){

            this.createELe();
        },
        createELe(){
             var container=document.createDocumentFragment()
             var leftBtn=this.createBtn('<');
             var rightBtn=this.createBtn('>');
             container.appendChild(leftBtn)
             container.appendChild(rightBtn)
             
             this.options.container.appendChild(container)
        },
        createBtn(text){
            var btn=document.createElement('div')
            btn.innerHTML=text;      
            return btn;     
        }

    }
    function merge(){
         var objs=[].slice.apply(arguments),
             len=objs.length,
             newObj={},
             _newObj={};
         if(len){
            for(var i in objs[0]){
              newObj[i]=objs[0][i]
            }
            objs.shift()
            if(objs.length){
              _newObj=merge.apply(this,objs)
              for(var i in _newObj){
                newObj[i]=_newObj[i]
              }
            }
         }
         return newObj;
      }
    return Pagination;
}())