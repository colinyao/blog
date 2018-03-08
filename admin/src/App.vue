<template>
  <div id="app">
        <!-- <keep-alive v-if="!$route.meta.notKeepAlive">
        <router-view></router-view>
        </keep-alive>
        <router-view v-if="$route.meta.notKeepAlive"></router-view> -->
        {{message.msg}}
        {{msg.a}}
  </div>
</template>

<script>
export default {
  name: 'app',
  props:['message'],
  components: {

  },
  data(){
    return{
        msg:{
           a:'1233'
        }
    }
  },
  mounted(){
    console.log(this)
    window.b=this.message
  }
}

</script>

<style lang="less">
@import '../static/css/base.less';


</style>
