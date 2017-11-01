<template>
   <div class="c_modal hvc" >
        <transition name="switch_shade">
            <div v-show="currentVal" class="c_shade" @click="()=>{this.hideOnBlur?this.currentVal=false:''}" :class="{'transparent':!shadow}" @touchmove.prevent></div>
        </transition>
        <div class="c_content" v-show="currentVal">
              <slot></slot>
        </div>
   </div>   
</template>
<script>
     export default{
        props:{
            value: {
                type: Boolean,
                default: false
            },
            shadow: {
                type: Boolean,
                default: true
            },
            hideOnBlur:{   //点击遮罩自动关闭弹窗
                type:Boolean,
                default:true
            }
        },
        data(){
             return{
                 currentVal:true
             }
         },
         created(){
            console.log(this.value)
            this.currentVal = this.value
        },
        watch: {
            value(newVal) {
                console.log(newVal)
                  this.currentVal = newVal
                  this.currentVal?this.$emit('onShow',true):this.$emit('onHide',true)
        }
    }
     }
</script>
<style>

.c_content{
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:501;    
    max-width: 90%;
    color:#fff;
}

</style>