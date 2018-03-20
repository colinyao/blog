<template>
<div class="c_markdown">
    <button @click="uploadimg">upload</button>
    <mavon-editor  style="height: 500px" ref=md :ishljs = "true"  v-model="value" @imgAdd="$imgAdd" @save="_save" />

</div>
</template>
<script>
import { mavonEditor } from 'mavon-editor'
import axios from 'axios'
import 'mavon-editor/dist/css/index.css'
  export default{
     components:{
       mavonEditor
     },
     data(){
       return{
         value:'',
         img_file: {}
       }
     },
     mounted(){

     },
     methods:{
        $imgAdd(pos, $file){
            // 缓存图片信息
            this.img_file[pos] = $file;
        },
        $imgDel(pos){
            delete this.img_file[pos];
        },
        uploadimg($e){
            // 第一步.将图片上传到服务器.
            var formdata = new FormData();
            for(var _img in this.img_file){
                formdata.append(_img, this.img_file[_img]);
            }
            axios({
                url: 'server url',
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
                for (var i in res) {
                    // $vm.$img2Url 详情见本页末尾
                    $vm.$img2Url(res[i][0],res[i][1]);
                }
            })
        },
        _save(value,render){
            console.log(value)
        }
     }
  }
</script>

<style lang="less">


</style>
