(function(w){

    var Class={
         create:function(){
             return function(){
                  this.init.call(this,arguments)
             }
         }
    }

    var DatePicker=Class.create()

    DatePicker.prototype={
          init:function(){
              this.elements={}
              this.dateList=[];
              this.createELe()
              this.updateState(this.getNowDate())
          },
          getNowDate:function(){
              var date=new Date();
              var year = date.getFullYear();
              var month=date.getMonth();
              var day=date.getDay();
              return{
                  year:year,
                  month:month,
                  day:day
              }
          },
          createELe:function(){
               
               var datePicker=document.createElement('div');
               datePicker.className="datePicker";

               this.createDateController();
               datePicker.appendChild(this.elements.dateController);

               var table=this.createPannel();
               document.body.appendChild(datePicker);
          },
          createDateController(){
               var dateController=this.elements.dateController=document.createElement('div');
               dateController.className='dateController';
               var topController=['yearBackBtn','monthBackBtn','yearBtn','monthBtn','monthForwardBtn','yearForwardBtn']; // 顶部控制按钮
               for(var i=0,len=topController.length;i<len;i++){
                   dateController[topController[i]]=document.createElement('span');
                   dateController[topController[i]].className=topController[i];
                   dateController.appendChild(dateController[topController[i]])
               }
               return dateController;
          },
          createPannel(){
               var table=document.createElement('table');
               var tbody=document.createElement('tbody');
               var tr=document.createElement('tr');
               var td=document.createElement('td');
               table.appendChild(tbody)
          },
          updateState:function(date){
              this.elements.dateController.yearBtn.innerHTML=date.year+'年';
              this.elements.dateController.monthBtn.innerHTML=date.month+'月';
          }
    }

     w.DatePicker=new DatePicker()
})(window)




