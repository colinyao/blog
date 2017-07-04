<template>
    <div  class="c_select_m" :class="{'on':status}" @click="handleTrigger">
           <div class="c_select_text">{{currentText}}</div>
           <transition name="switch_shade">
           <div class="c_shade" v-if="status"></div>
           </transition>
           <transition name="switch_contain">
           <div class="c_select_contain" v-if="status">
                <div class="c_select_title">{{title}}</div>
                <ul  class="c_select_options" v-model="currentVal">
                      <li v-for="o in options" @click="handleSelected(o.value,o.text)">{{o.text}}</li>
                 </ul>     
           
             </div>
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
            },
            title:{
              type:String
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
                if(this.disabled || this.disabled==='disabled'){
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
     .c_select_m{
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
                background:url(../../../../static/images/icon/arrow_down.svg);
                background-size:100% auto;
          }
          &.on{
                &:after{
                     transform:translate3d(0,-50%,0) rotate3d(0,0,1,180deg);
                }
          }
          .c_shade{
              position:fixed;
              top:0;
              left:0;
              bottom:0;
              right:0;
              background:#000;
              opacity:0.7;
              z-index:999;
              transition:all 0.3s;
          }
          .c_select_contain{
                position:fixed;
                width:100%;
                max-height:345px;
                left:0;
                bottom:0;
                background: #fff;
                z-index:1000;
                transition:all 0.35s;
                .c_select_title{
                      text-align: center;

                       line-height: 30px;
                       font-size:16px;
                       background:#898989;
                       color:#fff;
                       box-sizing: border-box;

                }
               .c_select_options{
                    position: relative;
                    max-height: 315px;
                    width:100%;
                    border:1px solid #ddd;
                    transition:all 0.5s;
                    overflow-y: scroll;
                    -webkit-overflow-scrolling:touch;
               li{
                       border-bottom: 1px solid #ddd;
                       line-height: 30px;
                       height:30px;
                       text-align: center;
                       cursor:pointer;
                       box-sizing: border-box;
                }
            }
          }
          .switch_contain-enter,.switch_contain-leave{
                 transition:all .35s;
          }
           .switch_contain-enter-active,.switch_contain-leave-active{
                transform:translate3d(0,100%,0);
           }
           .switch_shade-enter-active,.switch_shade-leave-active{
               opacity:0;
           }



     }
</style>