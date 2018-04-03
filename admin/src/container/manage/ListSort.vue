<template>
    <div class="content">
         <div class="controlPanel">
              <div class="btn ml10" @click="_toEdit">新增</div>
              <div class="btn danger ml10 mr10" @click="_deleteAll">删除</div>
              <Cselect :options="sortOptions" v-model="searchCondition.type"></Cselect>
              <div class="btn ml10" @click="_searchList">搜索</div>
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
                   <li v-for="(item,index) in list">
                       <div class="selected">
                         <Ccheckbox v-model="checkAll[index]" :option="item._id"></Ccheckbox>
                       </div>
                       <div class="order">{{((searchCondition.pageIndex-1)*searchCondition.pageSize)+index+1}}</div>
                       <div class="title">{{item.title}}</div>
                       <div class="createDate">{{item.update_time}}</div>
                       <div class="opreate">
                           <span class="btn" @click="_toEdit(item._id)">修改</span>
                           <span class="btn delete danger" @click="_toDelete(item._id,index)">删除</span>
                       </div>
                   </li>
              </ul>
         </div>
         <div class="pagination" id="pagination">

         </div>
    </div>
</template>
<script>
import {API_SEARCHMAIN,API_SEARCHLIST,API_DELETEALL,API_DELETEARTICAL} from '../../assets/api/index'
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
              let list=this.list.map((ele)=>(ele._id))
              return list
          },
       },
       data(){
          return{
             sortOptions:[{text:'全部',value:''}],
             searchCondition:{pageIndex:1,pageSize:20,type:''},
             checkAll:[],
             list:[
             ],
             pagination:''
          }
       },
       created(){
           this.initInfo();
           this._searchList();
       },
       mounted(){


       },
       methods:{
         initInfo(){
              this.$http.post(API_SEARCHMAIN).then(res=>{
                  if(res.data.code==200){
                     let _res=res.data.rst;
                     this.sortOptions=this.sortOptions.concat(_res.types.map(ele=>({text:ele.type,value:ele.type})))
                  }
              })
         },
         _searchList(){
            this.$http.post(API_SEARCHLIST,{formData:this.searchCondition}).then(res=>{
                 this.list=res.data.rst.list;
                 if(!this.pagination&&res.data.rst.total){
                   this.pagination=new Pagination({container:document.getElementById('pagination'),total:res.data.rst.total})
                   this.pagination.addListener('change',(index)=>{  //监听页码变化
                       this.searchCondition.pageIndex=index;
                       this._searchList()
                   })
                 }else{
                   this.pagination.update({total:res.data.rst.total})
                 }
            })
         },
         _toEdit(id){
             this.$router.push({path:'manage/edit',query:{id:id}})
         },
         _toDelete(id,index){
            this.$http.post(API_DELETEARTICAL,{id:id}).then(res=>{
                if(res.data.code=='200'){
                    //删除成功
                    this.list.splice(index,1)
                }
            })
         },
         _deleteAll(){

           let _checkAll=this.checkAll.filter(ele=>ele!=='');
           this.$http.post(API_DELETEALL,{id:''}).then(res=>{
               if(res.data.code=='200'){
                   //删除成功
                   this._searchList()
               }
           })
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
     .title{
       cursor:pointer;
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
