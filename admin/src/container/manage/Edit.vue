<template>
  <div class="content" id="editPage">
      <Cell><Cinput type="text" :titleStyle="{fontSize:'14px'}" title="标题："></Cinput></Cell>
      <Cell class="mt10"><span class="label">分类：</span><Cselect :options="typeOptions"></Cselect></Cell>
      <MarkDown class="markDown mt20"></MarkDown>
      <Cell>
          <div class="btn">提交</div>
      </Cell>
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
.btn{
    width:150px;
    line-height: 40px;
    background:#00b0ff;
    color:#fff;
    margin:20px auto;
    text-align: center;
    border-radius: 6px;

}
</style>
