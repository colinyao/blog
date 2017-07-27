<template>
<div class="c_cell" :class="className">
  <slot></slot>
</div>  
</template>
<script>
    export default{
        props:{
           className:String
        },
        data(){
            return{
                
            }
        }
    }
</script>
<style lang="less">
   .c_cell{
      display: block;
      font-size:0;
   }
</style>