<template>
    <div class="c_checkbox" :class="{'on':defaultChecked}" @click="handleChecked">
        <div class="c_checkbox_box" :class="{'circle':type=='circle'||type=='1'}">
            <input type="checkbox" :name="name" :value="defaultValue" class="unvisible" :disabled="disabled" :checked="defaultChecked">
        </div>
        <span class="c_checkbox_text">{{text}}</span>
    </div>
</template>
<script>
export default {
    props: {
        value:{},
        option:{},  //存储原始value
        name: {
            type: String
        },
        text: {
            type: String
        },
        disabled: {
            type: [String, Boolean]
        },
        type: {
            type: [String, Number],
        },
        checked: {
            type: [String, Boolean]
        }
    },
    data() {
        return {
            defaultChecked: '',
            defaultValue:''
        }
    },
    created() {
        this.defaultChecked = this.checked;
        this.defaultValue=this.value;
        if (this.defaultChecked) this.$emit('input',this.defaultValue||this.option);
    },
    methods: {
			handleChecked(){
				if(!!this.disabled){
					 return false
				}

        this.defaultChecked=!this.defaultChecked;
        this.defaultChecked?this.$emit('input',this.defaultValue||this.option):this.$emit('input','')
			}
		},
    watch:{
        value:{
            handler(newValue){
                if(newValue!==null&&newValue!==undefined&&newValue!==''){
                    this.defaultChecked=true
                }else{
                    this.defaultChecked=false
                }
                this.defaultValue=this.value;
            }
        }
    }
	}

</script>
<style lang="less">
.c_checkbox {
    display: inline-block;
    font-size: 14px;
    color: #333;
    &.on {
        .c_checkbox_box:after {
            display: block;
        }
        .c_checkbox_box:before {
            background: #2fec00;
            border-color: #2fec00;
        }
    }
    .c_checkbox_box {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        line-height: 1
    }
    .c_checkbox_box:before {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border: 1px solid #ddd;
        box-sizing: border-box;
    }
    .c_checkbox_box.circle:before {
        border-radius: 100%;
    }
    .c_checkbox_box:after {
        content: "";
        display: none;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: url(../../../static/images/icon/icon_right.svg);
        background-size: 100% auto;
        z-index: 2;
    }
    input {
        width: 24px;
        height: 24px;
        vertical-align: middle;
    }
}
</style>
