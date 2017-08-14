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
              this.monthArr = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
              this.elements={}
              this.dateList=[];
              this.createELe()
              this.updateState(this.getNowDate())
          },
          getNowDate:function(){
              var date=new Date();
              var year = date.getFullYear();
              var month=date.getMonth()+1;
              var day=date.getDate();

              return{
                  year:year,
                  month:month,
                  day:day
              }
          },
          createELe:function(){
            var data={
                    'indicator':['日', '一', '二', '三', '四', '五', '六'],
                    'prev-month':[24,25,26,27,28,29,30],
                    'current-month':[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
                    'next-month':[1,2,3,4,5]
               }             
               var datePicker=document.createElement('div');
               datePicker.className="datePicker";

               this.createDateController();
               datePicker.appendChild(this.elements.dateController);

               var datePannel=document.createElement('div');
               datePannel.className='pick_pannel';
               var dateTable=this.createPannel(data,7);
               
               datePannel.appendChild(dateTable)

               datePicker.appendChild(datePannel)
               document.body.appendChild(datePicker);
          },
          createDateController(){
               var dateController=this.elements.dateController=document.createElement('div');
               dateController.className='dateController';
               var topController=['yearBackBtn','monthBackBtn','yearBtn','monthBtn','yearForwardBtn','monthForwardBtn']; // 顶部控制按钮
               for(var i=0,len=topController.length;i<len;i++){
                   dateController[topController[i]]=document.createElement('span');
                   dateController[topController[i]].className=topController[i];
                   dateController.appendChild(dateController[topController[i]])
               }
               return dateController;
          },
          //创建控制面板，可复用生成日期面板，月份面板，年份面板
          createPannel(data,deadline){   
               var  table=document.createElement('table'),
                     tbody=document.createElement('tbody'),
                     tr=document.createElement('tr'),
                     td=document.createElement('td'),
                     th=document.createElement('th'),
                     num=0,
                     _tr=tr.cloneNode();
                     tbody.appendChild(_tr);
               for(var key in data){
                    for(var i=0,end=data[key].length;i<end;i++){
                          if(num%deadline==0){   
                               _tr=tr.cloneNode();
                               tbody.appendChild(_tr)
                          }
                          if(key=='indicator'){
                             var _th=th.cloneNode();
                             _th.className=key;
                             _th.innerHTML=data[key][i];
                             _tr.appendChild(_th);
                          }else{
                             var _td=td.cloneNode();
                             _td.className=key;
                             _td.innerHTML=data[key][i];
                             if(this.getNowDate().day==data[key][i] && key=='current-month'){
                                  _td.className='current-day'
                             }
                             _tr.appendChild(_td);                           
                          }

                           num++;
                    }            
               }
               table.appendChild(tbody)
               return table;
          },
          updateState:function(date){
              this.elements.dateController.yearBtn.innerHTML=date.year+'年';
              this.elements.dateController.monthBtn.innerHTML=date.month+'月';
          }
    }

     w.DatePicker=new DatePicker()
})(window)




