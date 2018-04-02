import {SET_ARTICALLIST,SET_COLLECTIONINFO_INFO,SET_PAGEINDEX,SET_ARCHIVE,SET_TOPICAL} from '../constants/ActionTypes'
import * as api from '../api'
export const queryArticalList=(ops)=>(dispatch,getState)=>{
    //当articalList长度为0时触发请求
      let state=getState();
      if(typeof state.articalList[ops.type] !=='object' || typeof state.articalList[ops.type]['list'] !=='object' || !state.articalList[ops.type]['list'][ops.pageIndex]){

           api.getArticalList({formData:ops}).then((res)=>{

                dispatch({
                     type:SET_ARTICALLIST,
                     payload:{
                      type:ops.type,
                      pageIndex:ops.pageIndex,
                      total:res.rst.total,
                      list:{[ops.pageIndex]:res.rst.list}
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
     let state=getState()

     if(!state.collectionInfo.load){
           api.getCollection().then((res)=>{
               dispatch({
                  type:SET_COLLECTIONINFO_INFO,
                  payload:res.rst
               })
           })
     }
}
export const queryArchive=()=>(dispatch,getState)=>{
      let state=getState()
      if(!state.archive.load){
            api.getArchive().then((res)=>{
                   dispatch({
                      type:SET_ARCHIVE,
                      payload:res.rst.list
                   })
            })
      }

}
export const queryTopical=()=>(dispatch,getState)=>{
      let state=getState()

      if(!state.topical.load){
            api.getTopical().then((res)=>{
                   dispatch({
                      type:SET_TOPICAL,
                      payload:res.rst.list
                   })
            })
      }

}
export const setPageIndex=(ops)=>({
    type:'SET_PAGEINDEX',
    payload:ops
})
