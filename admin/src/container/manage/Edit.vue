<template>
  <div class="content" id="editPage">
      <Cell><Cinput type="text" :titleStyle="{fontSize:'14px'}" title="标题："></Cinput></Cell>
      <Cell class="mt10"><span class="label">分类：</span><Cselect :options="typeOptions"></Cselect></Cell>
      <MarkDown></MarkDown>
  </div>
</template>
<script>
import {Cell,Cselect,Cinput,MarkDown} from '../../component/cele'
  export default{
     components:{
        Cell,
        Cinput,
        Cselect,
        MarkDown
     },
     data(){
         return{
             typeOptions:[{text:'JS',value:1}],
         }
     }
  }
</script>
<style lang="less">
#editPage input{
   line-height: 20px;
}
</style>
<style lang="less" scoped>
.content{
   padding:20px 20px 0;
}
.label{
  font-size:14px;
}
</style>
