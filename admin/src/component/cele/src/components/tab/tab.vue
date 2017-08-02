<template>
      <div class="c_tab border_t_1 border_b_1">
              <slot></slot>
              <div class="line" :class="[currentAnimation?direction?'line-left':'line-right':'']":style='{left:left,right:right,backgroundColor:activeLineColor||"#ff6600"}'>

              </div>
      </div>
</template>
<script>
import {tabBar} from '../../../assets/mixins/index.js'
export default{
    mixins:[tabBar],
    props:{
       activeLineColor:String,
       animation:{
        type:Boolean,
        default:true
      },
      lineType:String
    }
}
</script>
<style lang="less">
@bg:#fff;
    .c_tab{
          width:100%;
          background-color:@bg;
          display: flex;
          justify-content:space-between;
          align-items:center;
          position: relative;
          .line{
              position: absolute;
              bottom:0;
              height:2px;
              text-align: center;
          }
          .line-right{
            transition:left 0.35s cubic-bezier(0,0.35,0.25,1.0) 0.09s,right 0.35s cubic-bezier(0,0.35,0.25,1.0);
          }
          .line-left{
            transition:left 0.35s cubic-bezier(0,0.35,0.25,1.0),right 0.35s cubic-bezier(0,0.35,0.25,1.0) 0.09s;
          }
    
    }
</style>