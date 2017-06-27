<template>
    <div class="c_input vc" :class="{'inner':leftPos=='inner'}">
        <div class="vc" v-if="leftPos=='outer'">
            <slot name="left"></slot>
            <span class="c_title" v-if="title" :style="titleStyle">{{title}}</span>
            
        </div>
        <div class="c_border vc">
            <div class="vc" v-if="leftPos=='inner'">
                <slot name="left"></slot>
                <span class="c_title" v-if="title" :style="titleStyle">{{title}}</span>
            </div>
            
            <input v-if="defaultType=='number'" 
                type="number" 
                :maxlength="max"
                :name="name"
                :readonly="readonly"
                :disabled="disabled"
                v-model='currentVal' 
                ref='input' 
                :placeholder='placeholder' 
                @foucs='handleFocus' 
                @blur='handleBlur'
            />
            <input v-else-if="defaultType=='tel'" 
                type="tel"
                :maxlength="max"
                :name="name"
                :readonly="readonly"
                :disabled="disabled"
                 v-model='currentVal' 
                 ref='input' 
                 :placeholder='placeholder' 
                 @foucs='handleFocus' 
                 @blur='handleBlur' 
             />
            <input v-else-if="defaultType=='email'" 
                type="email" 
                :maxlength="max"
                :name="name"
                :readonly="readonly"
                :disabled="disabled"
                v-model='currentVal' 
                ref='input' 
                :placeholder='placeholder' 
                @foucs='handleFocus' 
                @blur='handleBlur' 
            />
            <input v-else-if="defaultType=='password'" 
                type="password" 
                :maxlength="max"
                :name="name"
                :readonly="readonly"
                :disabled="disabled"
                v-model='currentVal' 
                ref='input' 
                :placeholder='placeholder' 
                @foucs='handleFocus' 
                @blur='handleBlur' 
            />
            <input v-else type="text" 
                :maxlength="max"
                :name="name"
                :readonly="readonly"
                :disabled="disabled"
                v-model='currentVal' 
                ref='input' 
                :placeholder='placeholder' 
                @foucs='handleFocus' 
                @blur='handleBlur' 
            />


            <div class="vc" v-if="rightPos=='inner'">
                <span class="c_eye c_icon" :class="{'active':this.showPassword}" v-if="type=='password'" @click="handlePasswordShow"></span>
                <span class="c_clear c_icon" v-if="currentVal" @click="handleClear"></span>
                <slot name="right"></slot>
            </div>
        </div>
        <div class="vc" v-if="rightPos=='outer'">
            <span class="c_eye c_icon" :class="{'active':this.showPassword}" v-if="type=='password'" @click="handlePasswordShow"></span>
            <span class="c_clear c_icon" v-if="currentVal" @click="handleClear"></span>
            <slot name="right"></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        value: {
            type: [String, Number]
        },
        type: {
            type: String,
        },
        reg: {
            type: RegExp
        },
        placeholder: {
            type: String
        },
        title: { //左侧title
            type: String
        },
        titleStyle: { //title样式
            type: Object
        },
        leftPos: { //左侧图标、title的位置
            type: String,
            default: 'outer' //outer在框的外面，inner在框的里面
        },
        rightPos: {  //右侧图标、title的位置
            type: String,
            default: 'inner'
        },
        max:{
            type:Number
        },
        disabled:{
            type:[String,Boolean],
            default:false
        },
        readonly:{
            type:[String,Boolean],
            default:false
        },
        name:{
            type:String
        }

    },
    data() {
        return {
            defaultType: '',
            currentVal: '',
            showPassword: false
        }
    },
    created() {  
        this.currentVal = this.value;
        this.defaultType = this.type;

    },
    mounted() {

    },
    methods: {
        handleFocus() {
            this.$emit('foucs')
        },
        handleBlur() {
            this.$emit('blur')
        },
        handlePasswordShow() {
            this.$refs.input.focus()
            this.showPassword = !this.showPassword;
            this.defaultType = this.defaultType == 'password' ? 'text' : 'password';
        },
        handleClear() {
            this.$refs.input.focus()
            this.currentVal = ''
        }
    },
    watch: {
        value(newVal) {
            this.currentValue = newVal
        },
        currentVal(newVal, oldVal) {
            if (this.reg) {
                var _newVal = newVal.match(this.reg);
                _newVal ? newVal = _newVal[0] : newVal = '';
            }
            this.$emit('input', newVal)
            this.currentVal = newVal
        }
    }
}
</script>
<style lang="less">
.c_input {
    position: relative;
    width: 100%;
    font-size: 0;
}
.c_border{
    flex:1;
}
.c_input input {
    max-width: 100%;
    flex: 1;
    font-size: 14px;
    line-height: 22px;
    border: 1px solid #ddd;
    border-radius: 3px;
    outline: none
}
.c_input .c_title {
    display: inline-block;
    text-align: center;
    font-size: 16px;
    line-height: 1;
}

.c_input .c_leftIcon {
    display: inline-block;
    width: 20px;
    height: 20px;
}

.c_input.inner .c_border {
    border: 1px solid #ddd;
    border-radius: 3px;
}

.c_input.inner input {
    border: none;

}

.c_input.inner .c_right {
    position: absolute;
    height: 100%;
    right: 0;
}

.c_input .c_icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-size: 100% auto;
    cursor: pointer;
    background-position: center center;
    background-repeat: no-repeat;
}

.c_input .c_clear {
    background-image: url(../../../../static/images/icon/close.svg)
}

.c_input .c_eye {
    background-image: url(../../../../static/images/icon/eye_default.svg)
}

.c_input .c_eye.active {
    background-image: url(../../../../static/images/icon/eye_active.svg)
}
</style>
