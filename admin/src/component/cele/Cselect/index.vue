<template>
    <div  class="c_select c_modal_bg">
           
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