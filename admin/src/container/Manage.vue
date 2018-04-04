<template>
  <div class="wrapper">
    <div class="mainMenu">
         <div class="top"></div>
         <ul class="menus">
              <router-link tag='li' v-for="item in menus" :to="item.link" exact>{{item.name}}</router-link>
         </ul>
    </div>
    <div class="container">
       <keep-alive v-if="!$route.meta.notKeepAlive">
       <router-view></router-view>
       </keep-alive>
       <router-view v-if="$route.meta.notKeepAlive"></router-view>
    </div>
  </div>
</template>
<script>
export default{
    components:{

    },
    data(){
        return{

           menus:[{name:'首页',link:'/manage'},{name:'列表',link:'/manage/list'}]
        }
    }
}
</script>
<style lang="less" scoped>
.wrapper{
  position: relative;
}
.mainMenu{
    position: fixed;
    top:0;
    left:0;
    bottom:0;
    width:120px;
    background:#41c4ff;
    box-sizing: border-box;
    .top{
        height:100px;
        background:#002849;
    }
    li{
        height:100px;
        color:#fff;
        line-height: 100px;
        text-align: center;
    }
    li.router-link-active{
        background:#005da6;
    }
}
.container{
   padding-left:120px;
}
.menus li{
  cursor: pointer
}
</style>
