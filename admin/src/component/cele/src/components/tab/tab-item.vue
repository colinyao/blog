<template>
      <div class="c_tab_item vvc" @click="clickItem" :class="{'disabled':disabled}">
             <div class="children vvc">
                    <div class="c_tab_icon" v-show="!currentActive"><slot name="icon" ></slot></div>
                    <div class="c_tab_icon" v-show="currentActive"><slot name="active-icon" ></slot></div>
                    <div class="c_tab_title" :class="{'active':currentActive}" :style="{color:currentActive?activeTitleColor:titleColor}"><slot name="title"></slot></div>
             </div>

      </div>
</template>
<script>
import {tabBarItem} from '../../../assets/mixins/index.js'
    export default{
        mixins:[tabBarItem],
         props:{
             icon:String,
             activeIcon:String,
             title:String,
             titleColor:String,
             activeTitleColor:String,
             link:String,
             disabled:Boolean,
             active:{
                 type:Boolean,
                 default:false
             }
         },
         data(){
            return{
                 currentActive:false,
                 currentIndex:-1
            }
         },
         created(){
              if(!this.disabled){
                 this.currentActive=this.active
              }
              
         },
         methods:{

         }
    }
</script>
<style lang="less">
@bg:#ddd;
    .c_tab_item{
         height:100%;
         padding:5px 0;
         flex:1;
         cursor:pointer;
         span{
             display: block;
         }
         .c_tab_icon img{
               width:22px;
               height:22px;
               background-size:cover;
         }
         .c_tab_title{
              font-size:12px;
              margin-top:4px;
              line-height: 1;
              color:#898989;
              &.active{
                  color:#ff6600;
              }
         }
         &.disabled{
             .c_tab_title{
                  color:#ddd;
                  &.active{
                     color:#ddd;
                  }
             }
         }
    }
</style>