<template>
    <div class="c_range" :name='name'>
            <div class="c_range_bar" :style="barStyle" v-thumb><span class="c_range_line" :style="lineStyle"></span><span class="c_range_thumb" :style="thumbStyle"></span></div>
    </div>
</template>
<script>
    export default{
        props:{ 
            value:{
                type:Number,
                default:0
            },
            name:{
                type:String
            },
            disabled:{
                type:[String,Boolean]
            },
            min:{
                type:Number,
                default:0,
            },
            max:{
                type:Number,
                default:100
            },
            rangeBarHeight:{
                type:Number,
                default:1
            }
        },
        data(){
            return{
                     currentVal:'',
                     barStyle:{}
                     
            }
        },
        created(){
              this.currentVal=this.value;
              this.barStyle={
                    height:this.rangeBarHeight+'px',
                    borderRadius:this.rangeBarHeight+"px",
                    marginTop:30/2+'px',
                    marginBottom:30/2+'px'
              }
              this.lineStyle={
                    borderRadius:this.rangeBarHeight+"px",

              }
              this.thumbStyle={
                    marginTop:this.rangeBarHeight/2+"px"
              }


        },
        directives:{
            thumb:{
                bind(el,binding,vnode){
                      vnode.context.$nextTick(()=>{
                       let  vm=vnode.context, 
                            thumb=el.children[1],
                            thumbWidth=thumb.offsetWidth,
                            barWidth=el.offsetWidth,
                            rangeWidth=barWidth-thumbWidth,
                            translateX=vm.currentVal/100*rangeWidth;
                       let  x,
                            _x,
                            disX,
                            touchStart=(e)=>{
                                  e.preventDefault();
                                  let touch=e.targetTouches[0];
                                  x=touch.clientX;
                            },
                            touchMove=(e)=>{
                                 let touch=e.changedTouches[0];
                                 _x=touch.clientX;
                                 let _translateX=translateX+_x-x;
                                 let currentVal=_translateX*100/rangeWidth;

                                 if(vm.min<=currentVal&&currentVal<=vm.max){
                                    translateX=_translateX;
                                    vm.currentVal=currentVal;
                                    update()
                                    x=_x;
                                 }    
                            },
                            touchEnd=(e)=>{
                                 e.preventDefault();
                                 x=0;
                                 _x=0;
                            },
                            update=()=>{
                                thumb.style.webkitTransform='translate3d('+translateX+'px,-50%,0)';   //滑块位移
                                thumb.style.transform='translate3d('+translateX+'px,-50%,0)';   //滑块位移
                                el.children[0].style.width=translateX+thumbWidth/2+'px';   //进度条                               
                            }                            
                            thumb.addEventListener('touchstart',touchStart,false)
                            thumb.addEventListener('touchmove',touchMove,false)
                            thumb.addEventListener('touchend',touchEnd,false)
                          
                          update()
                      })

                }
            }
        },
        methods:{

        },
        watch:{
             currentVal(newVal){
                    this.$emit('input',Math.round(newVal))
             }
        }
    }
</script>
<style lang="less">

.c_range_bar{
     position: relative;
     width:100%;
     background-color:#ddd;
     .c_range_line{
         position: absolute;
         top:0;
         left:0;
         height:100%;
         width:0;
         background:#ff6600;
     }
     .c_range_thumb{
        position: absolute;
        display: block;
        top:0;
         left:0;
        width:30px;
        height:30px;
        border-radius: 20px;
        background-color:#fff;
        box-shadow: 0 0 1px #000;
        box-sizing: border-box;
        transform:translate3d(0,-50%,0);
     }
}
</style>