<template>
    <div class="c_radio">
        <div class='c_radio_item' :class="{'on':item.defaultChecked}" @click="handleChecked(index)" v-for="(item,index) of currentOptions">
            <div class="c_radio_box">
                <input type="radio" :name="name" :value="item.value" class="unvisible" :disabled="disabled" :checked="item.defaultChecked">
            </div>
            <div class="c_radio_text">{{item.text}}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        value: {},
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
        options: {
            type: [Array]
        }
    },
    data() {
        return {
            currentOptions: [],
            currentCheckedId: ''
        }
    },
    created() {
        this.currentOptions = this.options;
        let flag = true;
        this.currentOptions.forEach((ele, i) => {
            ele.defaultChecked ? (this.currentCheckedId = i) || (flag = false) : '';
        })
        if (flag) {
            this.currentOptions[0].defaultChecked = true;
            this.currentCheckedId = 0;
        }
    },
    methods: {
        handleChecked(id) {
            if (!!this.disabled) {
                return false
            }
            this.currentOptions[this.currentCheckedId].defaultChecked = false;
            this.currentCheckedId = id;
            this.$set(this.currentOptions[id], 'defaultChecked', true)
            this.$emit('input', this.currentOptions[id].value);
        }
    },
    watch: {
        value(newVal) {

        }
    }
}
</script>
<style lang="less">
.c_radio {
    display: inline-block;
    font-size: 0;
    color: #333;
    .c_radio_item {
        display: inline-block;
        font-size: 14px;
        &.on {
            .c_radio_box:after {
                position: absolute;
                top: 50%;
                left: 50%;
                content: "";
                display: block;
                width: 50%;
                height: 50%;
                background: #2fec00;
                border-radius: 100%;
                transform: translate3d(-50%, -50%, 0)
            }
            .c_radio_box:before {
                border-color: #2fec00;
            }
        }
    }
    .c_radio_box {
        font-size: 0;
        display: inline-block;
        vertical-align: middle;
        position: relative;
        &:before {
            position: absolute;
            top: 0;
            left: 0;
            content: "";
            display: block;
            width: 100%;
            height: 100%;
            border: 2px solid #ddd;
            border-radius: 100%;
            box-sizing: border-box;
        }
    }
    .c_radio_text {
        display: inline-block;
        vertical-align: middle;
    }
    input {
        width: 24px;
        height: 24px;
    }
}
</style>
