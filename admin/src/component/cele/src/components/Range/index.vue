<template>
    <div class="c_range" :name='name'>
            <div class="c_range_line" :style='currentStyle'><span class="c_range_thumb"></span></div>
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
            styles:{
                type:[String,Object]
            }
        },
        data(){
            return{
                     currentVal:'',
                     currentStyle:{}
        
            }
        },
        created(){
              this.currentVal=this.value;
              this.currentStyle=this.styles;
        },
        methods:{

        }
    }
</script>
<style lang="less">
.唱{


}
</style>