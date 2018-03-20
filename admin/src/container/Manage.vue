<template>
  <div class="wrapper">
    <div class="mainMenu">
         <div class="top"></div>
         <ul>
              <li v-for="item in menus" class="selected">{{item.name}}</li>
         </ul>
    </div>
    <div class="content">
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
           menus:[{name:'首页',link:'/manage'}]
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
    li.selected{
        background:#005da6;
    }
}
.content{
   padding-left:120px;
}
</style>
