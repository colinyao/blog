<template>
  <div class="c_input hc">
      <span class="title" v-if='title' :style="titleStyle">{{title}}</span>
      <slot name="left"></slot>
	<input v-if="type=='number'" type="number" v-model='currentVal' ref='input' :placeholder='placeholder'/>
	<input v-else-if="type=='tel'" type="tel" v-model='currentVal' ref='input' :placeholder='placeholder'/>
	<input v-else-if="type=='email'" type="email" v-model='currentVal' ref='input' :placeholder='placeholder'/>
	<input v-else-if="type=='password'" type="password" v-model='currentVal' ref='input' :placeholder='placeholder'/>
	<input v-else type="text" v-model='currentVal' ref='input' :placeholder='placeholder'/>
	<slot name="right"><span class="c_rightbtn"></span></slot>
</div>	
</template>
<script>
	export default{
		props:{
              value:{
              	  type:[String,Number]
              },
              type:{
              	type:String,
              },
             reg:{
             	type:RegExp
             },
             placeholder:{
             	type:String
             },
             title:{
             	type:String
             },
             titleStyle:{
             	type:Object
             }
		},
		data(){
			return{
                    currentVal:''
			}
		},
		created(){
			this.currentVal=this.value;
		},
		watch:{
			value (val) {
                    this.currentValue = val
                 },
                 currentVal(newVal,oldVal){
			      if(this.reg){
			        var _newVal=newVal.match(this.reg);
			        _newVal?newVal=_newVal[0]:newVal='';
			      }

                 	this.$emit('input',newVal)
                 	this.currentVal=newVal
                 }
		}
	}
</script>
<style lang="less">
      .c_input{width:100%;font-size:0;}
	.c_input input{
		max-width:100%;
		flex:1;
		font-size:14px;
		line-height: 22px;
		border:1px solid #ddd;
		border-radius: 3px;
	}
	.c_input .title{
		text-align: center;
		font-size:18px;
	}
	.c_input .c_leftIcon{
		display: inline-block;
		width:20px;
		height:20px;
	}
</style>