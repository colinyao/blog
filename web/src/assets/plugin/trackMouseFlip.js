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
         var defaultOptions={
            element:'',  //NodeList
            rotateRange:8
         }

         this.options=this.combine(defaultOptions,options);


         this.bindEvent();
      },
      bindEvent:function(){
          var self=this,ops=this.options;




          ops.element.forEach(function(ele){
            (function(_ele){
              _ele.style.transformOrigin="50%,50%";
              _ele.style.webkitTransformOrigin="50%,50%";
              //鼠标进入
              _ele.addEventListener('mouseenter',function(e){

              },true)
              //鼠标移动
              _ele.addEventListener('mousemove',function(e){
                 var offsetPos=self.offsetPos(e.currentTarget),  //元素离窗口偏差
                     currentPos={x:e.clientX,y:e.clientY},  //鼠标离窗口的偏差
                     currentSize={x:e.currentTarget.offsetWidth,y:e.currentTarget.offsetHeight},  //元素宽高度
                     offsetDisRect={x:(currentSize.x/2+offsetPos.x-currentPos.x)/(currentSize.x/2),y:(currentSize.y/2+offsetPos.y-currentPos.y)/(currentSize.y/2)},//鼠标停留位置，离元素中心偏差
                     radio=self.calculateRadio(offsetDisRect);

                     _ele.style.transform="rotateX("+radio.y*ops.rotateRange+"deg) rotateY("+radio.x*ops.rotateRange+"deg) translateZ(50px)";
                     _ele.style.webkitTransform="rotateX("+radio.y*ops.rotateRange+"deg) rotateY("+radio.x*ops.rotateRange+"deg) translateZ(50px)";

              },true)
              //鼠标移出
              _ele.addEventListener('mouseleave',function(e){



              },true)
            })(ele)
          })



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


         return {x:-(offsetDisRect.x*offsetDisRect.x*offsetDisRect.x),y:offsetDisRect.y*offsetDisRect.y*offsetDisRect.y}
      },
      rotating(radio){

      },
      combine(){
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
