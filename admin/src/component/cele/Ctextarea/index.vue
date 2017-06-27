<template>
    <textarea class="c_textarea" 
        v-model="currentVal"
        :disabled="disbaled"
        :maxLength="max"
        :readonly="readonly"
        :textareaStyle="textareaStyle"
        :reg="reg"
        ref="textarea"
    ></textarea>
</template>
<script>
    export default{
        props:{
            value:{
                 type:[String,Number]
            },
            disabled:{
                type:[String,Boolean]
            },
            readonly:{
                type:[String,Boolean]
            },
            max:{
                type:Number
            },
            textareaStyle:{
                type:Object
            },
            reg:{
                type:RegExp
            }
        },
        data(){
            return{
                currentVal:''
            }
        },
        created(){
            this.currentVal=this.value
        },
        watch:{
           value(newVal){
               this.currentVal=newVal
           },
           currentVal(newVal,oldVal){
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
    
</style>