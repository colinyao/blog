<template>
      <div class="m_toast">
        <transition name="m_toast_animate">
             <div v-show="currentVal" class="m_toast_box" :class="type">{{text}}</div>
        </transition>
    </div>         
</template>
<script>
    export default{
        props:{
           type:{
               type:String,
               default:'success'
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
                   this.currentVal=true;
                   setTimeout(()=>{
                          this.hide()
                   },3000)
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
    .m_toast_box{
        position:fixed;
        top:50%;
        left:50%;
        max-width: 200px;
        min-width:80px;
        padding:0 10px;
        background:#fff;
        color:#fff;
        font-size:14px;
        line-height: 30px;
        background:rgba(0,0,0,0.7);
        border-radius: 6px;
        box-sizing: border-box;
        opacity:1;
        transform:translate3d(-50%,-50%,0);
        text-align: center;

        &.success {
             color:#2fec00
        }
        &.warning {
            color:#ffec00;
        }
        &.error {
              color:#ff1100;        
        }
    }

.m_toast_animate-enter-active, .m_toast_animate-leave-active{
  transition: all 0.5s ease     
}
.m_toast_animate-enter, .m_toast_animate-leave-active{
  opacity: 0 ;
}
</style>