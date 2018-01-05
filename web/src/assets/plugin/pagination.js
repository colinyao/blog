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
               total:0,
               current:1,
               maxBtnLength:8,
               btnText:true,
               currentColor:'#008acd'
          }
          this.options=merge(defaultOptions,options);
          this.listener={
               'prev':[],   //监听上一页
               'next':[],   //监听下一页
               'change':[]  //监听页码变化
          }
          this.init();
    }
    Pagination.prototype={
        constructor:Pagination,
        init(){
            if(this.options.total>1){
                this.createELe();
                this.bindEvent()
            }
        },
        createELe(){
             var that=this;
             var container=document.createDocumentFragment();
             var ul=document.createElement('ul');
             var leftBtn=[{text:'<',className:'prevBtn'}];
             var rightBtn=[{text:'>',className:'nextBtn'}];
             var pageList=[].concat(leftBtn,this.sortPageBtn(),rightBtn);
             pageList.forEach(function(ele){
                  ul.appendChild(that.createBtn(ele))
             })             
             container.appendChild(ul)
             if(this.options.container.hasChildNodes()){
                  this.options.container.removeChild(this.options.container.childNodes[0])
             }
             this.options.container.appendChild(container)
        },
        sortPageBtn(){
              var pageList=[],start={text:1,className:'pageBtn'},end={text:this.options.total,className:'pageBtn'};
              //第一种情况，total<=maxBtnLength
              var current=this.options.current;
              if(this.options.total>this.options.maxBtnLength){
                    var restBtnNum=this.options.maxBtnLength-2;
                    var startLine=current-Math.floor(restBtnNum/2);
                    var endLine=+current+(restBtnNum-Math.floor(restBtnNum/2));

                    if(startLine<2){
                         startLine=2;
                         endLine=2+restBtnNum;
                         
                    }else if(endLine>this.options.total){      
                         startLine=this.options.total-restBtnNum;
                         endLine=this.options.total
                         
                    }

                    var index=startLine;
                    while(index<endLine){
    
                          if(current>4 && startLine>2 && startLine===index){
                               pageList.push({text:'...',className:'prevLineBtn'})
                          }else if(current<this.options.total-3 && index===endLine-1){
                               pageList.push({text:'...',className:'nextLineBtn'})
                          }else{
                              pageList.push({text:index,className:'pageBtn'})
                          }
                          index++
                    }
              }else if(this.options.total<=this.options.maxBtnLength){
                   var index=2;
                   while(index<this.options.total){
                         pageList.push(index)
                         index++
                   }
              }
              return [].concat(start,pageList,end);
        },
        createBtn(btn){

            var ele=document.createElement('li')
            ele.innerHTML=btn.text;      
            var style='display:inline-block;margin:0 5px;';
            if(btn.text==this.options.current){
                ele.className=btn.className+' active';
                style+='color:'+this.options.currentColor+';'
            }else{
                ele.className=btn.className;
            }
            ele.style=style
            return ele;     
        },
        bindEvent(){
            var that=this;
            function click(e){
                var target=e.target||e.scrElement;
                var className=target.className;
                switch(className){
                     case 'prevBtn':
                     break;
                     case 'nextBtn':
                     break;
                     case 'prevLineBtn':
                     break;
                     case 'nextLineBtn':
                     break;
                     case 'pageBtn':
                         that.options.current=target.innerHTML;
                         that.createELe();
                         that.trigger('change',that.options.current)
                     break;
                }

            }
            this.options.container.addEventListener('click',click);
        },
        addListener(event,fn){
              if(this.listener[event]){
                   this.listener[event].push(fn)
              }
        },
        trigger(event){
            var args=[].slice.call(arguments,1),
                 that=this;
             if(this.listener[event]){
                   that.listener[event].forEach(function(fn){
                       fn.apply(fn,args)
                   })
             }
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