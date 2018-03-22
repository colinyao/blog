<template>
<div class="c_markdown">
    <button @click="$imgUpLoad">upload</button>
    <mavon-editor  style="height: 500px" ref='md' :ishljs = "true"  v-model="defaultValue" @imgAdd="$imgAdd" />
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
         saveUrl:{
            type:String
         },
         imgUpLoad:{
             type:Function
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
            this.img_file[pos] = $file;
        },
        $imgDel(pos){
            delete this.img_file[pos];
        },
        $imgUpLoad(){
            this.imgUpLoad(this)
        }


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
