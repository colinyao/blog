<template>
      <div>
      <h1 @click="nextView">View2</h1>
      <img src="../../static/images/bigimage01.jpg" alt="">
    </div>
</template>
<script>
      export default{
        metaInfo: {
          title: 'View2', // set a title
        },
        mounted(){
           this.getNextRoute()
        },
        methods:{
          nextView(){
             this.$router.push({path:'/view3'})
          },
          getNextRoute(){
             // require.ensure([],function(require){
             //     require('./View3').default
             // });
          }
        }
      }
</script>
<style>

</style>
