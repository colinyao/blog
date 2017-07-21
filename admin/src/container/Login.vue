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
      <Cell><Previewer :items="previewerList" ref="previewer" ></Previewer></Cell>
      <button @click="handleSubmit" class="btn">提交</button>
    <!--   <Cell><Calert v-model="showLoading" title="asdfasdf" text="asfasdfsafsa"></Calert></Cell> -->
      <div class="imgbox">
            <img class="previewer-demo-img"  v-for="(item, index) in smallPhotos" :src="item.src" @click="show(index)"/>
      </div>
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
import Previewer from '../component/cele/Previewer/index.vue'
import utils from '../assets/js/utils.js'
import Colin from '../assets/js/public.js'
import {previewer} from '../assets/mixins/index.js'
import {API_LOGIN,API_ULET_FILE,API_ULET_ARTICLE} from '../assets/api/index.js'
import {mapMutations} from 'vuex'

import Calert from '../component/cele/Calert/index.vue'
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
       Calert,
       Previewer
    },
    mixins:[previewer],
    data(){
         return{
              name:'',
              password:'',
              checkVal:'',
              selected:'',
              checkBox:'',
              options:[{text:'shelly',value:3},{text:'colin',value:1},{text:'harry',value:2},{text:'shelly',value:3},{text:'colin',value:1},{text:'harry',value:2},{text:'shelly',value:3}],
              showLoading:true,
              items:[],
              previewerList:[],
              smallPhotos:[{
                  src:'../../static/images/smallimage00.jpg',
              },{
                  src:'../../static/images/smallimage01.jpg',
              },{
                  src:'../../static/images/smallimage02.jpg',
              },{
                  src:'../../static/images/smallimage03.jpg',
              },{
                  src:'../../static/images/smallimage04.jpg',
              }],
              bigPhotos:[{
                  src:'../../static/images/bigimage00.jpg',
              },{
                  src:'../../static/images/bigimage01.jpg',
              },{
                  src:'../../static/images/bigimage02.jpg',
              },{
                  src:'../../static/images/bigimage03.jpg',
              },{
                  src:'../../static/images/bigimage04.jpg',
              }
              ]
         }
    },
    methods:{
        ...mapMutations(['updateUserInfo']),
        submit(){
            axios.post(API_LOGIN,{name:this.name,password:this.password}).then((res)=>{
                this.updateUserInfo(res.data.resultObject)
            })
        },
        show(index){
            this.previewer({
              index:index,
              items:this.bigPhotos,
        })
           
        },
        handleSubmit(){
            // let html=this.$refs.editor.getHtml();
            // Colin.ajax(API_ULET_ARTICLE,{content:html}).then((res)=>{
            //       console.log(res.data)
            // })
            this.showLoading=!this.showLoading
        }
    },
    created(){

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
.imgbox{
   img{width:60px;height:60px;}
}
.btn{
  position: absolute;
  z-index:1000000;
}
</style>
