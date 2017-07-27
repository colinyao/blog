<template>
      <div class="c_tabbar border_t_1 border_b_1">
              <slot></slot>
      </div>
</template>
<script>
    
</script>
<style lang="less">
@bg:#fff;
    .c_tabbar{
          width:100%;
          height:50px;
          background-color:@bg;
          display: flex;
          justify-content:space-between;
          align-items:center;
    }
</style>