<template>
    <div class="content">
         <div class="controlPanel">
              <div class="btn ml10">新增</div>
              <div class="btn danger ml10 mr10">删除</div>
              <Cselect :options="sortOptions"></Cselect>
         </div>
         <div class="listContainer">
               <ul class="list_title">
                 <li>
                     <div class="selected">
                       <CcheckAllbox v-model="checkAll" :options="checkAllOptions"></CcheckAllbox>
                     </div>
                    <div class="order">序号</div>
                    <div class="title">标题</div>
                    <div class="createDate">日期</div>
                    <div class="opreate">
                         操作
                    </div>
                </li>
               </ul>
              <ul class="list_items" v-if="checkAll.length">
                   <li v-for="(item,index) in list" @click="_toEdit(item.id)">
                       <div class="selected">
                         <Ccheckbox v-model="checkAll[index]" :option="item.id"></Ccheckbox>
                       </div>
                       <div class="order">{{index+1}}</div>
                       <div class="title">{{item.title}}</div>
                       <div class="createDate">{{item.createDate}}</div>
                       <div class="opreate">
                           <span class="btn">修改</span>
                           <span class="btn delete danger">删除</span>
                       </div>
                   </li>
              </ul>
         </div>
         <div class="pagination" id="pagination">

         </div>
    </div>
</template>
<script>
import {Cselect,Ccheckbox,CcheckAllbox} from '../../component/cele';
var Pagination =require('../../assets/plugin/pagination.js').Pagination;
   export default{
       components:{
         Cselect,
         Ccheckbox,
         CcheckAllbox
       },
       computed:{
          checkAllOptions(){
              let list=this.list.map((ele)=>(ele.id))
              return list
          },
       },
       data(){
          return{
             sortOptions:[{text:'JS',value:1}],
             checkAll:[],
             list:[
                 {title:'学好JS，走遍天下都不怕',id:1,createDate:'2017-10'},
                 {title:'学好JS，走遍天下都不怕',id:2,createDate:'2017-10'},
                 {title:'学好JS，走遍天下都不怕',id:3,createDate:'2017-10'},
                 {title:'学好JS，走遍天下都不怕',id:4,createDate:'2017-10'},
                 {title:'学好JS，走遍天下都不怕',id:5,createDate:'2017-10'},
                 {title:'学好JS，走遍天下都不怕',id:6,createDate:'2017-10'},
                 {title:'学好JS，走遍天下都不怕',id:7,createDate:'2017-10'},
                 {title:'学好JS，走遍天下都不怕',id:8,createDate:'2017-10'},
                 {title:'学好JS，走遍天下都不怕',id:9,createDate:'2017-10'},
                 {title:'学好JS，走遍天下都不怕',id:10,createDate:'2017-10'},
                 {title:'学好JS，走遍天下都不怕',id:11,createDate:'2017-10'},
                 {title:'学好JS，走遍天下都不怕',id:12,createDate:'2017-10'},
                 {title:'学好JS，走遍天下都不怕',id:13,createDate:'2017-10'},
                 {title:'学好JS，走遍天下都不怕',id:14,createDate:'2017-10'},
                 {title:'学好JS，走遍天下都不怕',id:15,createDate:'2017-10'},
                 {title:'学好JS，走遍天下都不怕',id:16,createDate:'2017-10'},
                 {title:'学好JS，走遍天下都不怕',id:17,createDate:'2017-10'},
                 {title:'学好JS，走遍天下都不怕',id:18,createDate:'2017-10'},
             ]
          }
       },
       mounted(){
         var pagination=new Pagination({container:document.getElementById('pagination'),total:20})
         pagination.addListener('change',(index)=>{  //监听页码变化

         })
       },
       methods:{
         _toEdit(id){
             this.$router.push({path:'/edit',query:{id:id}})
         }
       }
   }
</script>
<style lang="less" scoped>
.content{
   flex:1;
   height: 100%;
   display: flex;
   flex-direction: column;
}
.pagination{
   height:50px;
   display: flex;
   justify-content: center;
   align-items: center;
}
.listContainer{
   flex:1;
}
.controlPanel{
    height:100px;
    display: flex;
    align-items: center;
    .btn{
       font-size:14px;
       border:1px solid #41c4ff;
       padding:3px 10px;
       border-radius: 3px;
    }
    .btn.danger{
       border-color:#ff1100
    }

}
.btn{
   color:#41c4ff;
}
.btn.danger{
  color:#ff1100;
}
.listContainer ul{
   font-size:14px;
   li{
       display: flex;
       >div{
         padding:5px 3px;
         border-left:1px solid #ddd;
       }
   }
}
.listContainer{
  display: flex;
  flex-direction: column;
  border:1px solid #ddd;
  border-style:solid solid solid none;
  .list_title{
     line-height: 30px;
     background:#eee;
     li>div{
        text-align:center;
     }
  }
  .list_items{
     overflow-y: auto;
     li{
        border-top:1px solid #ddd;
        line-height: 24px;
     }
     .createDate{
       font-size:12px;
     }
  }
  .order{
     width:30px;
     text-align: center;
  }
  .title{
      flex:1;
      color:#333;
      font-size:12px;
  }
  .createDate{
     width:80px;
     color:#333;

  }
  .opreate{
      width:80px;
  }
  .opreate span{
     display: inline-block;
     font-size:12px;
  }
}

</style>
