(function(root){

   var Class={
     create:function(){
       return function(){
            this.init.apply(this,arguments)
       }
     }
   }
   var TrackMouseFlip=Class.create();
   TrackMouseFlip.prototype={
      init:function(options){
         this.defaultOptions={
            element:'',  //NodeList
            rotateRange:'10'
         }

         this.options=this.combine(this.defaultOptions,options);


         this.bindEvent();
      },
      bindEvent:function(){
          var self=this,ops=this.options;
          //鼠标进入

          //鼠标移动

          ops.element.forEach(function(ele){
            (function(_ele){
              _ele.addEventListener('mousemove',function(e){
                 var offsetPos=self.offsetPos(e.target),  //元素离窗口偏差
                     currentPos={x:e.clientX,y:e.clientY},  //鼠标离窗口的偏差
                     currentSize={x:e.currentTarget.offsetWidth,y:e.currentTarget.offsetHeight},  //元素宽高度
                     offsetDisRect={x:1-(currentPos.x-offsetPos.x)/(currentSize.x/2),y:1-(currentPos.y-offsetPos.y)/(currentSize.y/2)},//鼠标停留位置，离元素中心偏差
                     radio=self.calculateRadio(offsetDisRect);

                     _ele.style.transform="rotate3d("+offsetDisRect.x+","+offsetDisRect.y+",0,"+ops.rotateRange+"deg)";
                     _ele.style.webkitTransform="rotate3d("+offsetDisRect.x+","+offsetDisRect.y+",0,"+ops.rotateRange+"deg)";

              },true)
            })(ele)
          })


          //鼠标移出
      },
      offsetPos(obj){
         var x=obj.offsetLeft;
         var y=obj.offsetTop;
         if(obj.offsetParent){
             var offset=this.offsetPos(obj.offsetParent)
             x+=offset.x;
             y+=offset.y;
         }
         return{x:x,y:y}
      },
      calculateRadio(offsetDisRect){
         return {radioX:offsetDisRect.x*30,radioY:offsetDisRect.y*30}
      },
      rotating(radio){

      },
      combine(){

         var objs=[].slice.apply(arguments);
         var len=objs.length,newObj={},_newObj={};

         if(len){
            for(var i in objs[0]){
              newObj[i]=objs[0][i]
            }
            objs.shift()
            if(objs.length){
              _newObj=this.combine.apply(this,objs)
              console.log(newObj)
              for(var i in _newObj){
                newObj[i]=_newObj[i]
              }
            }
         }
         return newObj;
      }
   }




   	if (typeof define === 'function' && define.amd) {
   		define(function(){return TrackMouseFlip});   //define调用时，会自动执行函数
   	} else if (typeof exports === 'object') {
   		module.exports = TrackMouseFlip;
   	} else {
   		root.TrackMouseFlip = TrackMouseFlip;
   	}

})(window)
