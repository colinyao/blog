<template lang="html">
    <div class="wrapper">
         <Cell class="mt20"><Cinput class="w100" type="text" v-model='userInfo.userName'><span slot="left" class="label">我的名字:</span></Cinput></Cell>
         <Cell class="mt20"><Cinput  class="w100" type="text" v-model='userInfo.motto'><span slot="left" class="label">我的座右铭:</span></Cinput></Cell>
         <Cell class="mt20"><div class="btn" @click="_updateInfo">更新我的信息</div></Cell>
         <Cell class="mt20"><span class="label">分类:</span><Cselect class="mr20" :options="types"></Cselect><Cinput type="text" placeholder="请输入新分类名称" v-model='insertType'></Cinput><div class="btn ml20" @click="_addType">增加类型</div></Cell>

    </div>
</template>

<script>
import {API_SEARCHMAIN,API_UPDATEMAIN,API_ADDTYPE} from '../../assets/api/index'
import {Cell,Cselect,Cinput} from '../../component/cele';
export default {
   components:{
      Cell,Cselect,Cinput
   },
   data(){
       return{
          userInfo:{
               userName:'',
               motto:'',
          },
          types:[],
          insertType:''
       }
   },
   created(){
        this.initInfo()
   },
   methods:{
      initInfo(){
           this.$http.post(API_SEARCHMAIN).then(res=>{
               if(res.data.code==200){
                  let _res=res.data.rst;
                  this.userInfo=_res.userInfo
                  this.types=_res.types.map(ele=>({text:ele.type,value:ele.type}))
               }

           })
      },
      _addType(){
            this.$http.post(API_ADDTYPE,{type:this.insertType}).then(res=>{
                 if(res.data.code==200){
                     this.types.push({text:this.insertType,value:this.insertType})
                 }
            })
      },
      _updateInfo(){
          this.$http.post(API_UPDATEMAIN,{formData:this.userInfo}).then(res=>{
               if(res.data.code==200){

               }
          })
      }
   }
}
</script>

<style lang="less" scoped>

.wrapper{
   padding:30px;
}
.label{
  font-size:14px;
  width:100px;
  display: inline-block;
}
.btn{
   white-space: nowrap;
   font-size:14px;
   border:1px solid #41c4ff;
   padding:3px 10px;
   border-radius: 3px;
   color:#41c4ff
}
</style>
