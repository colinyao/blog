<template>
    <div class="c_confirm">
        <transition name="switch_shade">
            <div v-show="currentVal" class="c_shade" :class="{'transparent':!shadow}" @touchmove.prevent></div>
        </transition>
        <transition name="switch_box">
            <div class="c_confirm_contain hvc" v-show="currentVal">
                <div class="c_confirm_box vvc">
                    <p class="title">{{title}}</p>
                    <p class="content">{{content}}</p>

                    <div class="btn_group flex">
                       <div class="btn" @click="handleCancel">取消</div>
                       <div class="btn" @click="handleCertain">确定</div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
    </transition>
</template>
<script>
export default {
    props: {
        value: {
            type: Boolean,
            default: false
        },
        shadow: {   //是否显示遮罩
            type: Boolean,
            default: true
        },
        title: {   //提示标题
            type: String,
            default: ''
        },
        content: {   //提示内容
            type: String,
            default: ''
        },
        onCertain:{
            type:Function
        },
        onCancel:{
            type:Function
        }
    },
    data() {
        return {
            currentVal: ''
        }
    },
    created() {
        this.currentVal = this.value
    },
    methods: {
        handleCertain(){
            this.currentVal=false;
            if(this.onCertain){
                this.onCertain()
            }
            this.$emit('onHide',true)
        },
        handleCancel(){
            this.currentVal=false;
            if(this.onCancel){
                this.onCancel()
            }
            this.$emit('onHide',true)
        }
    },
    watch: {
        value(newVal) {
            this.currentVal = newVal
            this.currentVal?this.$emit('onShow',true):this.$emit('onHide',true)
        }
    }
}
</script>
<style lang="less">
.c_confirm {
    .c_shade.transparent {
        background: transparent;
    }
    .c_confirm_contain {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 500;
    }
    .c_confirm_box {
        background: #fff;
        font-size: 14px;
        z-index: 10001;
        width: 300px;
        border-radius: 5px;
        box-shadow: 0 0 1px #000;
        p {
            width: 100%;
            text-align: center;
        }
        .title {
            padding: 20px 10px 10px;
            font-weight: 400;
            font-size: 18px;
            box-sizing: border-box;
        }
        .content {
            padding: 0 10px 10px;
            min-height: 50px;
            color: #999;
            font-size: 14px;
            box-sizing: border-box;
        }

    }
}
.btn_group{
  width:100%;
  .btn {
      width: 100%;
      line-height: 40px;
      font-size: 18px;
      text-align: center;
      border-top: 1px solid #eee;
  }
}
.switch_box-enter-active,
.switch_box-leave-active {
    transition: all 0.3s;
}

.switch_box-enter {
    transform: scale(1.2);
    opacity: 0;
}

.switch_box-leave-active {
    transform: scale(0.8);
    opacity: 0;
}
</style>
