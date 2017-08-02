export const tabBar={
     props:{
         value:{
              type:Number,
              default:0
         }
     },
     data(){
          return{
              selectItem:-1,
              left:0,
              right:0,
              oneWidth:0,
              childLength:0,
              direction:1,
              currentAnimation:false,
              isFirst:true
          }
     },
     mounted(){
            this.selectItem=this.value
            this.childLength=this.$children.length;
            this.oneWidth=1/this.childLength*100;
            this.initIndex() 
     },
     methods:{
         initIndex(){
               if(!this.$children)return;
                this.$children.forEach((ele,i)=>{
                      ele.currentIndex=i
                      ele.$on('on-item-selected',this.handleClickItem)
                })           
                this.handleClickItem(this.selectItem)
         },
         handleClickItem(item){
                this.direction=this.selectItem>item?0:1;
                this.selectItem=item;
                for(let len=this.$children.length,i=0;i<len;i++){
                      this.$children[i].currentActive=this.$children[i].currentIndex==this.selectItem?true:false
                }
                if(this.lineType=='child'){
                     let _oneWidth=this.$children[item].$el.offsetWidth;
                     let childWidth=this.$children[item].$el.children[0].offsetWidth;
                     this.left=((_oneWidth-childWidth)/2/_oneWidth+item)*this.oneWidth+'%';
                     this.right=((_oneWidth-childWidth)/2/_oneWidth)*this.oneWidth+(this.childLength-item-1)*this.oneWidth+'%';
                }else{
                    this.left=item*this.oneWidth+'%';
                    this.right=(this.childLength-item-1)*this.oneWidth+'%';
                }
                if(this.isFirst){   //避免初始化时，动画效果执行
                    this.$nextTick(()=>{
                       this._animation=this.animation;
                       this.isFirst=false;                       
                    })
                 }
                this.$emit('input',this.selectItem)
         }
     },
     watch:{
          value(newVal){
                if(newVal != this.selectItem)this.handleClickItem(newVal);
          }
     }
}

export const tabBarItem={

     methods:{
          clickItem(){
                if(this.disabled){
                      return false;
                }           
               this.$emit('on-item-selected',this.currentIndex)
          }
     }
}