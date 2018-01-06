import {SET_ARTICALLIST,SET_COLLECTIONINFO_INFO} from '../constants/ActionTypes'
import * as api from '../api'
export const queryArticalList=(ops)=>(dispatch,getState)=>{
    //当articalList长度为0时触发请求
      let state=getState();    
      if(typeof state.articalList[ops.type] !=='object' || !state.articalList[ops.type][ops.pageIndex]){
           api.getArticalList(ops).then((res)=>{
                dispatch({
                     type:SET_ARTICALLIST,
                     payload:{
                      type:ops.type,
                      list:{[ops.pageIndex]:res.resultObject.list}
                    }
                })
          })       
      }
}

/*
信息集合
{
    userInfo:{
        name:'',
        avator:''
        motto:''
    },
    lables:[''],
    latestArticals:[],
    recommendBlogs:[]
}
*/
export const queryCollection=()=>(dispatch,getState)=>{
      api.getCollection().then((res)=>{
           dispatch({
              type:SET_COLLECTIONINFO_INFO,
              payload:res.resultObject
           })
      })
}