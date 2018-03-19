<template>
      <div>
      <h1 @click="nextView">View3</h1>
      <img src="../../static/images/bigimage03.jpg" alt="">
    </div>
</template>
<script>
      export default{
        metaInfo: {
          title: 'View3', // set a title
        },
        mounted(){
           this.getNextRoute()
        },
        methods:{
          nextView(){
             this.$router.push({path:'/view4'})
          },
          getNextRoute(){
             // require.ensure([],function(require){
             //     require('./View4').default
             // });
          }
        }
      }
</script>
<style>

</style>
