<template>
  <div id="app">
      <div class="form">
      <Cell><Cinput type="text" name=""  v-model="name"></Cinput></Cell>
      <Cell><Cinput type="text" name="" title="密码" :titleStyle="{paddingRight:'20px'}" v-model="name"></Cinput></Cell>    
              
              <input type="button" name="" value="提交" @click='submit'>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import Cell from '../component/formCell/Cell.vue'
import Cinput from '../component/formCell/Cinput.vue'
export default {
  name: 'app',
    components: {
       Cinput,
       Cell
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
        name(newVal){
          console.log(newVal)
        }
    }
}

</script>

<style lang="less">

</style>
