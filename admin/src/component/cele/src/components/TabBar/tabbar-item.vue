<template>
      <div class="c_tabbar_item vvc" @click="handleTabClick">
             <span class="c_tabbar_icon" v-show="!currentActive" :style="{backgroundImage:'url('+icon+')'}"></span>
             <span class="c_tabbar_icon" v-show="currentActive" :style="{backgroundImage:'url('+activeIcon+')'}"></span>
             <span class="c_tabbar_title" :class="{'active':currentActive}" :style="{color:currentActive?activeTitleColor:titleColor}" >{{title}}</span>
      </div>
</template>
<script>
    export default{
         props:{
             icon:String,
             activeIcon:String,
             title:String,
             titleColor:String,
             activeTitleColor:String,
             active:{
                 type:Boolean,
                 default:false
             }
         },
         data(){
            return{
                 currentActive:''
            }
         },
         created(){
              this.currentActive=this.active
         },
         methods:{
            handleTabClick(){
                 this.currentActive=true
            }
         }
    }
</script>
<style lang="less">
@bg:#ddd;
    .c_tabbar_item{
         height:100%;
         flex:1;
         span{
             display: block;
         }
         .c_tabbar_icon{
               width:22px;
               height:22px;
               background-size:cover;
         }
         .c_tabbar_title{
              font-size:12px;
              margin-top:2px;
              color:#898989;
              &.active{
                  color:#ff6600;
              }
         }
    }
</style>