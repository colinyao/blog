export const tabBar={
     props:{
         value:{
              type:Number,
              default:0
         }
     },
     data(){
          return{
              selectItem:-1
          }
     },
     mounted(){
            this.selectItem=this.value
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