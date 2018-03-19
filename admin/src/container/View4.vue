<template>
      <div>
      <h1 @click="nextView">View4</h1>
      <img src="../../static/images/bigimage04.jpg" alt="">
    </div>
</template>
<script>
      export default{
        metaInfo: {
          title: 'View4', // set a title
        },
        methods:{
          nextView(){
             this.$router.push({path:'/view1'})
          }
        }
      }
</script>
<style>

</style>
