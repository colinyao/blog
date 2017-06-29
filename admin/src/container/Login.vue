<template>
  <div id="app">
      <div class="form">
      <Cell><Cinput type="text"  v-model="name"></Cinput></Cell>
      <Cell><Cinput type="password" title="密码" :titleStyle="{paddingRight:'20px'}" leftPos="inner" rightPos="outer" v-model="password"><span slot="left" class="icon"><img src="../../static/images/icon/phone.svg"></span></Cinput></Cell>    
              <input type="button" name="" value="提交" @click='submit'>
      <Cell><Ctoggle></Ctoggle></Cell>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import Cell from '../component/cele/Cell.vue'
import Cinput from '../component/cele/Cinput'
import Ctoggle from '../component/cele/Ctoggle'
export default {
  name: 'app',
    components: {
       Cinput,
       Cell,
       Ctoggle
    },
    data(){
         return{
              name:'',
              password:''
         }
    },
    methods:{
        submit(){
            axios.post('http://localhost:3000/api/register',{name:this.name,password:this.password}).then((res)=>{
                console.log(res.data)
            })
        }
    },
    watch:{
        password(newVal){
          console.log(newVal)
        }
    }
}

</script>

<style lang="less" scoped>
.icon{
    display: inline-block;
    height:100%
}
.icon img{
    height:100%;
    width:auto;
}
</style>
