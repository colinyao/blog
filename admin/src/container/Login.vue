<template>
  <div id="app">
      <div class="form">
              <input type="text" name="" v-model="name">
              <input type="text" name="" v-model='password'>
              <input type="button" name="" value="提交" @click='submit'>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
    components: {
    
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
    }
}

</script>

<style lang="less">
   .form input{
      display: block;
      width:150px;
      line-height: 20px;
      border:1px solid #ddd;
   }
</style>
