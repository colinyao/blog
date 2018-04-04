<template>
<div class="c_markdown">
    <mavon-editor  style="height: 500px" ref='md' :ishljs = "true"  v-model="defaultValue" @imgAdd="$imgAdd" @imgDel="$imgDel" />
</div>
</template>
<script>
import { mavonEditor } from 'mavon-editor'

import 'mavon-editor/dist/css/index.css'
  export default{
     components:{
       mavonEditor
     },
     props:{
         value:{
            type:String
         },
         imgUpUrl:{
            type:String
         },
         saveUrl:{
            type:String
         },
         save:{
             type:Function
         }
     },
     data(){
       return{
         defaultValue:'',
         img_file: {}
       }
     },
     created(){
        this.defaultValue=this.value;
     },
     mounted(){

     },
     methods:{
        $imgAdd(pos, $file){
            // 缓存图片信息
            // 第一步.将图片上传到服务器.
             var formdata = new FormData();
             // for(let _img in $vm.img_file){
             //    //未上传的图片加入表单
             //    if(!$vm.img_file[_img].isUpload){
             //       formdata.append(_img, $vm.img_file[_img].file);
             //    }
             // }
             formdata.append(pos, $file);
             this.$http.post(this.imgUpUrl,formdata,{headers: { 'Content-Type': 'multipart/form-data' }}).then((res) => {
                /**
                 * 例如：返回数据为 [{pos: url}, {pos： url}...]
                 * pos 为原图片标志（./0）
                 * url 为上传后图片的url地址
                 */
                 // 第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
                //将img_file中的图片上传状态isUpload设为ture
                // for(let _img in $vm.img_file){
                //     //未上传的图片加入表单
                //     !$vm.img_file[_img].isUpload?$vm.img_file[_img].isUpload=true:''
                // }
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
                    this.$refs.md.$img2Url(imgList[i][0],imgList[i][1]);
                }
                this.$emit('imgUpLoad',urls)
            })
        },
        $imgDel(pos){
            //delete this.img_file[pos];
            this.$delete(this.img_file,pos)
        },
        // $imgUpLoad(){
        //     this.imgUpLoad(this)
        // }


     },
     watch:{
        value:{
           handler(newVal){
              this.defaultValue=newVal
           }
        },
        defaultValue:{
           handler(newVal){
              this.$emit('input',newVal)
           }
        }
     }
  }
</script>

<style lang="less">


</style>
