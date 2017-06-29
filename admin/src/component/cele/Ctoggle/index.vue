<template>
	<div class="c_toggle">
	        <div class="c_toggle_slide"><i></i></div>
		  <input type="checkbox" class="hidden" :disabled="disabled" :checked="checked">
	</div>
</template>
<script>
	export default{
		props:{ 
			disabled:{
				type:[String,Boolean]
			},
			checked:{
				type:[String,Boolean],
				default:false
			}
		},
		data(){
			return{
                     defaultChecked:''
			}
		},
		created(){
			this.defaultChecked=this.checked
		}
	}
</script>
<style lang="less">
.c_toggle{
	display: inline-block;
}
.c_toggle_slide{
	position: relative;
	width:60px;
	height:24px;
	background:#eee;
	border-radius: 25px;
	i{
		position: absolute;
		display: block;
		width:30px;
		height:30px;
		top:-3px;
		left:-3px;
		border-radius: 100%;
		background:#fff;
		box-shadow: 0 0 1px #898989;
	}
}
</style>