<template>
<div class="c_markdown">
  <div id="my-editormd">
    <textarea name="content"  style="display:none;"></textarea>
  </div>
</div>
</template>
<script>
import '../../../static/js/zepto.min'
var editor=require('../../../static/plugins/markdown/editormd.js')
  export default{
     data(){
       return{

       }
     },
     mounted(){
       let Editor =editormd("my-editormd", {//注意1：这里的就是上面的DIV的id属性值
          width   : "90%",
          height  : 640,
          syncScrolling : "single",
          path    : "/static/js/markdown/lib/",//注意2：你的路径
          saveHTMLToTextarea : true,//注意3：这个配置，方便post提交表单

         /**上传图片相关配置如下*/
         imageUpload : true,
         imageFormats : ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
         imageUploadURL : "/smart-api/upload/editormdPic/",//注意你后端的上传图片服务地址
      });
     }
  }
</script>

<style lang="less">
@import '../../../static/plugins/markdown/css/editormd.css';

</style>
