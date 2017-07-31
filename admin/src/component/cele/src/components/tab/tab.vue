<template>
      <div class="c_tab border_t_1 border_b_1">
              <slot></slot>
              <div class="line" :style='{left:left,right:right,backgroundColor:activeLineColor||"#ff6600"}'>

              </div>
      </div>
</template>
<script>
import {tabBar} from '../../../assets/mixins/index.js'
export default{
    mixins:[tabBar],
    props:{
       activeLineColor:String,
       activeType:String //child
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
    
    }
</style>