<template>
	<div class="c_toggle" :class="{'on':defaultChecked}" @click="handleChecked">
	        <div class="c_toggle_slide"><span class="c_toggle_on"></span></div>
		  <input type="checkbox" :name="name" :value="val" class="hidden" :disabled="disabled" :checked="defaultChecked">
	</div>
</template>
<script>
	export default{
		props:{ 
			value:{},
			val:'',
			name:{
				type:String
			},
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
                     defaultChecked:'',
        
			}
		},
		created(){
			this.defaultChecked=this.checked
		},
		methods:{
			handleChecked(){
				if(!!this.disabled){
					 return false
				}
                      this.defaultChecked=!this.defaultChecked;
                      this.defaultChecked?this.$emit('input',this.val):this.$emit('input','')
			}
		}
	}
</script>
<style lang="less">
.c_toggle{
	display: inline-block;
	&.on{
		.c_toggle_slide{
			border-color:#2fec00;
			&:after{
			     content:'';
                     transform:translate3d(16px,0,0)
			}
			&:before{
				transform:scale3d(0,0,0)
			}
		}
		.c_toggle_on{
			position:absolute;
			top:0;
			left:0;
			width:100%;
			height:100%;
			background:#2fec00;
			z-index:1;
			border-radius: 25px;
		}
	}
}
.c_toggle_slide{
	position: relative;
	width:40px;
	height:24px;
	border:1px solid #ddd;
	background:#eee;
	border-radius: 25px;
	&:after{
		content:'';
		position: absolute;
		display: block;
		width:24px;
		height:24px;
		top:0;
		left:0;
		border-radius: 100%;
		background:#fff;
		box-shadow: 0 0 1px #898989;
		transition:transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
		z-index:9;
	}
	&:before{
		content:'';
		position:absolute;
		top:0;
		left:0;
		width:100%;
		height:100%;
		background:#fff;
		z-index:2;
		border-radius: 25px;
		transition:transform 0.35s;
	}
}
</style>