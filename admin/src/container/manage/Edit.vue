<template>
  <div class="content" id="editPage">
      <Cell><Cinput type="text" :titleStyle="{fontSize:'14px'}" title="标题：" v-model="formData.title"></Cinput></Cell>
      <Cell class='mt10'><Cinput type="text" :titleStyle="{fontSize:'14px'}" title="摘要：" v-model='formData.abstract'></Cinput></Cell>
      <Cell class="mt10"><span class="label">分类：</span><Cselect :options="typeOptions" v-model="formData.type"></Cselect></Cell>
      <MarkDown class="markDown mt20" :imgUpLoad='uploadimg' v-model="formData.content"></MarkDown>
      <Cell>
          <div class="btn" @click="submit">提交</div>
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
             typeOptions:[{text:'js',value:'js'}],
             formData:{
                 id:'',
                 title:'',
                 abstract:'',
                 content:'',
                 type:''
             }
         }
     },
     created(){
        this.formData.id=this.$route.query.id;
     },
     methods:{
       uploadimg($vm){
           // 第一步.将图片上传到服务器.
           var formdata = new FormData();
           for(var _img in $vm.img_file){
               formdata.append(_img, $vm.img_file[_img]);
           }
           this.$http.axios({
               url: 'http://localhost:3000/api/editor/multipleImgUpLoad',
               method: 'post',
               data: formdata,
               headers: { 'Content-Type': 'multipart/form-data' },
           }).then((res) => {
               /**
                * 例如：返回数据为 [[pos: url], [pos, url]...]
                * pos 为原图片标志（./0）
                * url 为上传后图片的url地址
                */
                // 第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
               let urls=res.data.rst;
               let imgList=[]
               for(let i in urls){
                 for(let key in urls[i]){
                    imgList.push([key,urls[i][key]])
                 }
               }
               for (var i in imgList) {
                   // $vm.$img2Url 详情见本页末尾
                   //img2Url方法，通过正则，把param1替换为param2
                   $vm.$refs.md.$img2Url(imgList[i][0],imgList[i][1]);
               }
           })
       },
       submit(){
          this.$http.post("http://localhost:3000/api/editor/articleUpLoad",{formData:this.formData}).then((res)=>{
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
