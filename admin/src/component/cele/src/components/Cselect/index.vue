<template>
    <div  class="c_select" :class="{'on':status}" @click="handleTrigger">
           <div class="c_select_text">{{currentText}}</div>
           <transition name="switch_select">
           <ul v-if="status" class="c_select_options" v-model="currentVal">
                 <li v-for="o in options" @click="handleSelected(o.value,o.text)">{{o.text}}</li>
           </ul>
           </transition>
    </div>
</template>
<script>
    export default{
        props:{
            disabled:{
                type:[String,Boolean]
            },
            data:{
                 type:Array
            },
            name:{
                type:String
            },
            options:{
                type:Array
            }
        },
        data(){
            return{
                status:false,
                currentVal:'',
                currentText:'',
            }
        },
        created(){
            this.currentVal=this.options[0].value;
            this.currentText=this.options[0].text;
        },
        methods:{
            handleTrigger(){
                 if(this.disabled || this.disabled==='disabled'){
                      return false
                 }
                 this.status=!this.status;

            },
            handleSelected(val,text){
                  this.currentVal=val;
                  this.currentText=text;
            }
        },
        watch:{
           currentVal(newVal,oldVal){
                if(!!this.disabled){
                    return false
                }
                this.currentVal = newVal
                this.$emit('input',newVal)
                this.$emit('selected-text',this.currentText)
           }
        }
    }
</script>
<style lang="less">
     .c_select{
          position:relative;
          width:200px;
          height:26px;
          line-height: 24px;
          padding:0 20px 0 3px;
          border:1px solid #ddd;
          font-size:14px;
          color:#333;
          box-sizing: border-box;
          &:after{
                content:'';
                display: inline-block;
                position: absolute;
                right:0;
                top:50%;
                transform:translate3d(0,-50%,0);
                transition:transform 0.35s;
                width:18px;
                height:18px;
                background:url(../../../static/images/icon/arrow_down.svg);
                background-size:100% auto;
          }
          &.on{
                &:after{
                     transform:translate3d(0,-50%,0) rotate3d(0,0,1,180deg);
                }
          }
           .c_select_options {
                position:absolute;
                width:100%;
                top:100%;
                left:-1px;
                border:1px solid #ddd;
                border-style:solid solid none solid;
                transition:all 0.5s;
                z-index:999;
                background:#fff;
               li{

                       padding:0 3px;
                       border-bottom: 1px solid #ddd;
                       line-height: 24px;
                       cursor:pointer;
                }
                li:hover{
                       color:#fff;
                       background:#898989;
                }
            }
          .switch_select-enter,.switch_select-leave{
                 transtion:all 0.2s;
          }
          .switch_select-enter-active,.switch_select-leave-active{
                opacity:0;
          }


     }
</style>
