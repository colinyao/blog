<template>
    <div class="fixWrapper" id="login">
          <div class="contentArea">
               <div class="title">登录</div>
               <div class="content">
                    <Cell class="mt10"><Cinput class="w100" type="text"   leftPos="inner" :border="false" rightPos="inner" v-model="formData.userName"><span slot="left" class="icon"><img src="../../static/images/icon/user.svg"></span></Cinput></Cell>
                    <Cell class="mt10"><Cinput class="w100" type="password"   leftPos="inner" :border="false" rightPos="inner" v-model="formData.password"><span slot="left" class="icon"><img src="../../static/images/icon/password.svg"></span></Cinput></Cell>
                    <div class="btn" @click="_login">登录</div>
               </div>
          </div>
    </div>
</template>

<script>
import {Cell,Cinput} from '../component/cele/index.js'
import {mapMutations} from 'vuex'
import {API_LOGIN} from '../assets/api'
  export default{
     components:{
        Cell,Cinput
     },
     data(){
         return{
             formData:{
                 userName:'',
                 password:'',
             }
         }
     },
     methods:{
        ...mapMutations(['updateUserInfo']),
        _login(){
            this.$http.post(API_LOGIN,this.formData).then(res=>{
                 if(res.data.code=='200'){
                     this.updateUserInfo({'token':res.data.rst.token})
                     this.$router.push({path:'/manage'})
                 }
            })
        }
     }

  }
</script>
<style lang='less'>

</style>
<style lang='less' scoped>
.w100{
  width:100%;
}
.fixWrapper{
   position: absolute;
   width:100%;
   height:100%;
   top:0;
   left:0;
   display: flex;
   align-items: center;
   justify-content: center;
}
.contentArea{
    width:400px;
    background:#eee;
    padding-bottom:20px;
    .title{
         line-height: 40px;
         background:#41c4ff;
         color:#fff;
         text-align: center;
         font-size:18px;
    }
    .content{
       padding:0 30px;
    }
    .btn{
       width:100px;
       margin:20px auto 0;
       line-height: 30px;
       text-align: center;
       background:#41c4ff;
       color:#fff;
       border-radius: 5px;
    }
    .icon{
       width:20px;
       padding:10px;
       img{
          width:100%;
       }
    }
}
</style>
