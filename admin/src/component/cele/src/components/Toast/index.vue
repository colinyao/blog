<template>
      <transition name="toast_animate">
            <div v-if="currentVal" class="c_toast" :class="type"><i></i>{{text}}</div>
      </transition>
           
</template>
<script>
    export default{
        props:{
           type:{
               type:String,
               default:'normal'
           },
           text:{
               type:String
           },
           value:Boolean
        },
         data(){
            return{
                 currentVal:''
            }
         },
         created(){
              this.currentVal=this.value;
         },
         methods:{
              show(){
                   this.currentVal=true
              },
              hide(){
                   this.currentVal=false;
              }
         },
         watch:{
             value(newVal){
                  this.currentVal=newVal
             }
         }
    }
</script>
<style lang="less">
    .c_toast{
        position:fixed;
        top:20px;
        left:50%;
        min-width: 300px;
        padding-right:10px;
        background:#fff;
        color:#898989;
        font-size:14px;
        line-height: 34px;
        box-shadow: 0 0 1px #898989;
        box-sizing: border-box;
        opacity:1;
        transform:translate3d(-50%,0,0);
        
        & i{
            display:block;
            float:left;
            width:34px;
            height:34px;
            margin-right:10px;
            &:before{
                 content:'';
                 display: block;
                 width:100%;
                 height:100%;

            }
        }
        &.normal i{
            background:#20a0ff;
            &:before{
                 transform:rotate(180deg);
                 background:url(../../../static/images/icon/toast_warning.svg) center center no-repeat;
                 background-size:cover;
            }
        }
        &.success i{
            background:#13ce66;
            &:before{
                background:url(../../../static/images/icon/toast_success.svg) center center no-repeat;
                background-size:cover;
            }
        }
        &.warning i{
            background:#f7ba2a;
            &:before{
                background:url(../../../static/images/icon/toast_warning.svg) center center no-repeat;
                background-size:cover;
            }
        }
        &.error i{
            background:#ff4949;
            &:before{
                 background:url(../../../static/images/icon/toast_error.svg) center center no-repeat;
                 background-size:cover;
            }           
        }
    }

.toast_animate-enter-active, .toast_animate-leave-active{
  transition: all 0.5s ease     
}
.toast_animate-enter, .toast_animate-leave-active{
  opacity: 0 ;
  transform:translate3d(-50%,-54px,0);
}
</style>