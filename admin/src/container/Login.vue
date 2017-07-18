<template>
  <div id="app">
      <div class="form">
      <Cell><Cinput type="text"  v-model="name"></Cinput></Cell>
      <Cell><Cinput type="password" title="密码" :titleStyle="{paddingRight:'20px'}" leftPos="inner" rightPos="outer" v-model="password"><span slot="left" class="icon"><img src="../../static/images/icon/phone.svg"></span></Cinput></Cell>    
              <input type="button" name="" value="提交" @click='submit'>
      <Cell><Ctoggle v-model="checkVal" defaultVal="123"></Ctoggle></Cell>
      <Cell><Cselect :options="options" v-model="selected"></Cselect></Cell>
      <Cell><CselectM :options="options" title="选择" v-model="selected"></CselectM></Cell>
      <Cell><Cradio val="123"  :options="options" type="1" v-model="checkBox" text="haha"></Cradio></Cell>
      <Cell><Editor height="300px" uploadJson="http://localhost:3000/api/editor/fileUpLoad" ref="editor"></Editor></Cell>
      <button @click="handleSubmit">提交</button>
      <Cloading v-model="showLoading" :shadow="false"></Cloading>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import Cell from '../component/cele/Cell.vue'
import Cinput from '../component/cele/Cinput/index.vue'
import Ctoggle from '../component/cele/Ctoggle/index.vue'
import Cselect from '../component/cele/Cselect/index.vue'
import CselectM from '../component/cele_m/Cselect/index.vue'
import Ccheckbox from '../component/cele/Ccheckbox/index.vue'
import Cradio from '../component/cele/Cradio/index.vue'
import Editor from '../component/cele/Editor/Editor.vue'
import utils from '../assets/js/utils.js'
import Colin from '../assets/js/public.js'
import {API_LOGIN,API_ULET_FILE,API_ULET_ARTICLE} from '../assets/api/index.js'
import {mapMutations} from 'vuex'
import Cloading from '../component/cele/Cloading/index.vue'
export default {
  name: 'app',
    components: {
       Cinput,
       Cell,
       Ctoggle,
       Cselect,
       CselectM,
       Ccheckbox,
       Cradio,
       Editor,
       Cloading
    },
    data(){
         return{
              name:'',
              password:'',
              checkVal:'',
              selected:'',
              checkBox:'',
              options:[{text:'shelly',value:3},{text:'colin',value:1},{text:'harry',value:2},{text:'shelly',value:3},{text:'colin',value:1},{text:'harry',value:2},{text:'shelly',value:3}],
              showLoading:true
         }
    },
    methods:{
        ...mapMutations(['updateUserInfo']),
        submit(){
            axios.post(API_LOGIN,{name:this.name,password:this.password}).then((res)=>{

                this.updateUserInfo(res.data.resultObject)
            })
        },
        handleSubmit(){
            let html=this.$refs.editor.getHtml();
            Colin.ajax(API_ULET_ARTICLE,{content:html}).then((res)=>{
                  console.log(res.data)
            })
        }
    },
    watch:{
        password(newVal){
          console.log(newVal)
        },
        checkVal(newVal){
          console.log(newVal)
        },
        selected(newVal){
          console.log(newVal)
        },
        checkBox(newVal){
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
