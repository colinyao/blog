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
              childLength:0
          }
     },
     mounted(){
            this.selectItem=this.value
            this.childLength=this.$children.length;
            this.oneWidth=1/this.childLength*100;
            this.right=(this.childLength-1)*this.oneWidth+'%';
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
                this.selectItem=item;
                for(let len=this.$children.length,i=0;i<len;i++){
                      this.$children[i].currentActive=this.$children[i].currentIndex==this.selectItem?true:false
                }
                this.left=item*this.oneWidth+'%';
                this.right=(this.childLength-item-1)*this.oneWidth+'%';
                this.$emit('input',this.selectItem)
         }
     },
     watch:{
          value(newVal){
                this.handleClickItem(newVal)
          }
     }
}

export const tabBarItem={

     methods:{
          clickItem(){
               this.$emit('on-item-selected',this.currentIndex)
          }
     }
}