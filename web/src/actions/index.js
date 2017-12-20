// import * as types from '../constants/ActionTypes'
import * as api from '../api'
export const getHomeInfo=()=>(dispatch,getState)=>{
    //当articalList长度为0时触发请求
   if(!getState().homeReducer.articalList.length){
      api.home.getHomeInfo().then((res)=>{
            if(res.resultObject.userInfo.login){
              dispatch({
                  type:'INSERT_USER_INFO',
                  payload:res.resultObject.userInfo
               })             
            }
            dispatch({
                 type:'INSERT_HOME_INFO',
                 payload:res.resultObject
            })
      })
    }
}
export const getUserInfo=()=>(dispatch,getState)=>{
      api.home.getUserInfo().then((res)=>{
           dispatch({
              type:'INSERT_USER_INFO',
              payload:res.resultObject
           })
      })
}