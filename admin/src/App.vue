<template>
<<<<<<< Updated upstream
  <div class="wrapper" id="app">
=======
  <div id="app">
>>>>>>> Stashed changes
        <keep-alive v-if="!$route.meta.notKeepAlive">
        <router-view></router-view>
        </keep-alive>
        <router-view v-if="$route.meta.notKeepAlive"></router-view>
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
  </div>
</template>

<script>
export default {
  name: 'app',
<<<<<<< Updated upstream
    components: {

    }
=======
>>>>>>> Stashed changes
}

</script>

<style lang="less">
@import '../static/css/base.less';


</style>
