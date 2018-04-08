<template>
  <div class="content" id="editPage">
      <Cell><Cinput type="text" class="w100" :titleStyle="{fontSize:'14px'}" title="标题：" v-model="formData.title"></Cinput></Cell>
      <Cell class='mt10'><Cinput class="w100" type="text" :titleStyle="{fontSize:'14px'}" title="摘要：" v-model='formData.abstract'></Cinput></Cell>
      <Cell class="mt10"><span class="label">分类：</span><Cselect :options="typeOptions" v-model="formData.type"></Cselect></Cell>
      <!-- <Cell class="mt10"><span class="label">图片：</span><Cselect :options="formData.imgs" v-model="img"></Cselect><button>删除</button></Cell> -->
      <MarkDown class="markDown mt20" @imgUpLoad="_imgUpLoad" :imgUpUrl='imgUpUrl' v-model="formData.content"></MarkDown>
      <Cell>
          <div class="btn" @click="submit">提交</div>
      </Cell>
  </div>
</template>
<script>
import {API_UP_IMG,API_SEARCHMAIN,API_UP_ARTICLE,API_SEARCHARTICAL,API_DELETEIMG} from '../../assets/api'
import {Cell,Cselect,Cinput,MarkDown} from '../../component/cele/index.js'
  export default{
     components:{
        Cell,
        Cinput,
        Cselect,
        MarkDown
     },
     data(){
         return{

             img:'',   //选中的图片
             imgUpUrl:API_UP_IMG,
             typeOptions:[],
             formData:{
                 id:'',
                 title:'',
                 abstract:'',
                 content:'',
                 imgs:[],  //此篇文章上传的图片
                 type:''
             }
         }
     },
     created(){
        this.formData.id=this.$route.query.id;
        if(this.formData.id)this.initData();
     },
     methods:{
       initData(){
           this.$http.post(API_SEARCHMAIN).then(res=>{
               if(res.data.code==200){
                  let _res=res.data.rst;
                  this.typeOptions=this.typeOptions.concat(_res.types.map(ele=>({text:ele.type,value:ele.type})))
               }
           })
           this.$http.post(API_SEARCHARTICAL,{_id:this.formData.id}).then(res=>{
               this.formData=res.data.rst
           })
       },
       _imgUpLoad(url){
           this.formData.imgs.push(url)
       },
       submit(){
          this.$http.post(API_UP_ARTICLE,{formData:this.formData}).then((res)=>{
              console.log(res)
          })
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
.w100{
  width:100%;
}
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
