<template>
      <div class="c_tab_item vvc" @click="clickItem">
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
              this.currentActive=this.active
         },
         methods:{

         },
         watch:{
              currentActive(newVal){
                     if(newVal){
                        this.$emit('on-item-selected',this.currentIndex)
                     }
              }
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
    }
</style>