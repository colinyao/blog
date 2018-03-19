<template>
      <div>
      <h1 @click="nextView">View1</h1>
      <img src="../../static/images/bigimage00.jpg" alt="">
       </div>
</template>
<script>
      export default{
        metaInfo: {
          title: 'View1', // set a title
        },
        mounted(){
           this.getNextRoute()
        },
        methods:{
          nextView(){
             this.$router.push({path:'/view2'})
          },
          getNextRoute(){
             // require.ensure([],function(require){
             //     require('./View2').default
             // });
          }
        }
      }
</script>
<style>

</style>
