(function(w){

    var Class={
         create:function(){
             return function(){
                  this.init.apply(this,arguments)
             }
         }
    }

    var DatePicker=Class.create()

    DatePicker.prototype={
          init:function(options){
              this.target=options.target || '';
              this.today=options.today || '';
              this.monthArr = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
              this.yearArr=[];
              this.year='';
              this.month='';
              this.day='';
              this.dateArr=[31,28,31,30,31,30,31,31,30,31,30,31];
              this.elements={}
              this.dateList=[];
              this.currentPannel=0;
              this.initialDate();
              this.updateYearArr()
              this.createELe()
              this.initialPos();
              this.updateState()
              this.bindEvent()

          },
          initialDate(){
              var dateObj=this.defaultDate=this.getNowDate()
              this.year=dateObj.year;
              this.month=dateObj.month;
              this.day=dateObj.day;
              //判断是否是闰年
              if(this.year%4==0&&this.year%100!=0 || this.year%400==0){
                     this.dateArr[1]=29
              }
              this.updateDayArr()
          },
          initialPos(){
              var offset=this.offsetPos(this.target);
              var height=this.target.offsetHeight;
              console.log(this.elements.datePicker)
              this.elements.datePicker.style.left=offset.left+3+'px';
              this.elements.datePicker.style.top=offset.top+height+3+'px';
          },
          offsetPos( elements ){ 
              var top = elements.offsetTop; 
              var left= elements.offsetLeft;
              var parent = elements.offsetParent; 
              while( parent != null ){ 
              top += parent.offsetTop; 
              left += parent.offsetLeft;
              parent = parent.offsetParent; 
              }; 
              return {
                  top:top,
                  left:left
              };
          },  
          updateYearArr(){
              var year=this.defaultDate.year,
              end=Math.floor(year/10)*10,
              year=[];
              for(i=0;i<10;i++){
                   year.push(end+i)
              }
              this.yearArr=year;
          },
          updateDayArr(){
               this.dayArr={
                    'indicator':['日', '一', '二', '三', '四', '五', '六'],
                    'prev-month':[],
                    'current-month':[],
                    'next-month':[]
               }  
               var monthStart=new Date(this.month+' 1,'+this.year);
               var weekday=monthStart.getDay()?monthStart.getDay():7;

               for(var i=1,len=this.dateArr[this.month-1];i<=len;i++){
                   this.dayArr['current-month'].push(i)
               }
               for(var i=weekday;i>0;i--){
                   this.dayArr['prev-month'].unshift(this.dateArr[this.month-2<0?11:this.month-2]-weekday+i)
               }
               for(var i=1,len=42-weekday-this.dateArr[this.month-1];i<=len;i++){
                   this.dayArr['next-month'].push(i)
               }
          },
          updateState:function(date){
              this.elements.dateController.yearBtn.innerHTML=this.year+'年';
              this.elements.dateController.monthBtn.innerHTML=this.month+'月';
          },
          getNowDate:function(){
              var reg=/^(January|February|March|April|May|June|July|August|September|October|November|December|[1-2][0-9]{3})\ ((3[0-1])|(\b[0-1]?[1-9]))\,((1[0-2])|(0?[1-9]))$/;
              if(reg.test(this.today)){
                  console.log('ok')
              }
              var date=this.today?new Date(this.today):new Date();
              var year = date.getFullYear();
              var month=date.getMonth()+1;
              var day=date.getDate();
              var weekday=date.getDay();
              return{
                  year:year,
                  month:month,
                  day:day,
                  weekday:weekday
              }
          },
          createELe:function(){    
            //总控制
               var datePicker=this.elements.datePicker=document.createElement('div');
               datePicker.className="datePicker"; 
            
               var dateController=this.createDateController();
               datePicker.appendChild(dateController);

               var arr=['day','month','year'];
               for(var i=0,len=arr.length;i<len;i++){
                 //生成年，月，日控制面板
                    datePicker.appendChild(this.initialPannel(arr[i]))
               }
              
               document.body.appendChild(datePicker);

          },
          createDateController(){
              //生成头部控制按钮
               var dateController=document.createElement('div');
               dateController.className='dateController';
               this.elements.dateController={};
               var topController=['yearBackBtn','monthBackBtn','yearBtn','monthBtn','yearForwardBtn','monthForwardBtn']; // 顶部控制按钮
               for(var i=0,len=topController.length;i<len;i++){
                   this.elements.dateController[topController[i]]=document.createElement('span');
                   this.elements.dateController[topController[i]].className=topController[i];
                   dateController.appendChild(this.elements.dateController[topController[i]])
               }
               return dateController;
          },
          initialPannel(key){
            //初始化面板
                var pannel=document.createElement('div'),table;
                pannel.className='pick_pannel';
                switch (key){
                    case 'day':
                    table=this.createPannel(this.dayArr,7);
                    pannel.className=pannel.className+' day-pannel'
                    break;
                    case 'month':
                    table=this.createPannel({month:this.monthArr},4);
                    pannel.className=pannel.className+' month-pannel'
                    pannel.style.display='none'
                    break;
                    case 'year':
                    table=this.createPannel({year:this.yearArr},4);
                    pannel.className=pannel.className+' year-pannel'
                    pannel.style.display='none'
                }
                
                pannel.appendChild(table)
                this.elements[key+'Pannel']=pannel;
                return pannel;
          },   
          updateDayPannel(){
            //更新日期面板
                var table=this.createPannel(this.dayArr,7);
               this.elements.dayPannel.replaceChild(table,this.elements.dayPannel.childNodes[0]);
          },       
          //创建控制面板，可复用生成日期面板，月份面板，年份面板
          createPannel(data,deadline){   
            //动态创建面板元素
               var  table=document.createElement('table'),
                     tbody=document.createElement('tbody'),
                     tr=document.createElement('tr'),
                     td=document.createElement('td'),
                     span=document.createElement('span'),
                     th=document.createElement('th'),
                     num=0,
                     _tr=tr.cloneNode();
                     tbody.appendChild(_tr);
               for(var key in data){
                    for(var i=0,end=data[key].length;i<end;i++){
                          if(num%deadline==0 && num!=0){   
                               _tr=tr.cloneNode();
                               tbody.appendChild(_tr)
                          }
                          if(key=='indicator'){ 
                            //创建星期几抬头
                             var _th=th.cloneNode();
                             _th.className=key;
                             _th.innerHTML=data[key][i];
                             _tr.appendChild(_th);
                          }else{
                             var _td=td.cloneNode();
                             var _span=span.cloneNode();
                             _td.className=key;
                             _span.innerHTML=data[key][i];
                             //判断日期是否已过
                             if(this.year<this.defaultDate.year || (this.year==this.defaultDate.year&&this.month<this.defaultDate.month) || (this.month==this.defaultDate.month && key=="prev-month") || (this.month==this.defaultDate.month && data[key][i]<this.defaultDate.day&&key=="current-month")){
                                    _td.className=_td.className+' prev';
                             }
                             //判断是否是今天
                             if(this.year==this.defaultDate.year && this.month==this.defaultDate.month && this.defaultDate.day==data[key][i] && key=='current-month'){
                                  _td.className='current-day'
                             }
                             _td.appendChild(_span);
                             _tr.appendChild(_td);                           
                          }
                           num++;
                    }            
               }
               table.appendChild(tbody)
               return table;
          },
          bindEvent:function(){
              let self=this;
              if(this.target.tagName=="INPUT"){
                   this.target.addEventListener('focus',function(){
                         self.show()                    
                   })
                   this.target.addEventListener('blur',function(){
                         self.hide()
                   })
              }
              this.elements.dateController.yearBtn.addEventListener('click',function(){
                     self.switchPannel('.year-pannel')
              },false)
              this.elements.dateController.monthBtn.addEventListener('click',function(){
                     self.switchPannel('.month-pannel')
              },false)
              this.elements.yearPannel.addEventListener('click',function(e){
                    var target=e.target || e.srcElement;
                    var year=target.innerText;
                    self.year=year;
                    self.switchPannel('.month-pannel');
                    self.updateState();
              })
              this.elements.monthPannel.addEventListener('click',function(e){  //
                     var target=e.target || e.srcElement;
                     var totalEles=document.querySelectorAll('.month');
                     for(var i=0,len=totalEles.length;i<len;i++){
                         if(totalEles[i]===e.target.parentNode){
                              self.month=++i;
                              break;
                         }
                     }
                     self.updateDayArr()
                     self.updateDayPannel();
                   
                     self.switchPannel('.day-pannel')
                     self.updateState();
              },false)
              this.elements.dayPannel.addEventListener('click',function(e){
                    var target=e.target || e.srcElement;
                    if(target.tagName=='SPAN'){
                         if(self.target.tagName=='INPUT'){
                              self.target.value=self.year+'-'+self.month+'-'+self.day;
                         }else{
                             self.target.innerHTML=self.year+'-'+self.month+'-'+self.day;
                         }
                         self.hide()
                    }
              })
              this.elements.dateController.monthBackBtn.addEventListener('click',function(){   
                      if(self.month==1){
                            self.month=12;
                            self.year--;
                      }else{
                        self.month--; 
                      }
                      self.updatePannel()
              },false)
              this.elements.dateController.yearBackBtn.addEventListener('click',function(){
                      self.year--;
                      self.updatePannel()
              },false)             
              this.elements.dateController.monthForwardBtn.addEventListener('click',function(){
                      if(self.month==12){
                            self.month=1;
                            self.year++;
                      }else{                    
                            self.month++;
                      }
                     self.updatePannel()
              },false)
              this.elements.dateController.yearForwardBtn.addEventListener('click',function(){
                     self.year++;
                     self.updatePannel()

              },false)
          },
          updatePannel:function(){
                 this.updateDayArr()
                 this.updateDayPannel();
                 this.updateState();
          },
          switchPannel:function(target){
               let eles=document.querySelectorAll('.pick_pannel');
               for(var i=0,len=eles.length;i<len;i++){
                    eles[i].style.display='none'
               }
               document.querySelector(target).style.display='block'
          },
          show:function(){
               this.elements.datePicker.style.display="block"
          },
          hide:function(){
               this.elements.datePicker.style.display="none"
          }

    }

     w.DatePicker=DatePicker
})(window)




