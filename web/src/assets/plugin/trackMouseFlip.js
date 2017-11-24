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
      init(options){

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
