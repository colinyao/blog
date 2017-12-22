import {SET_ARTICALLIST} from '../constants/ActionTypes.js'
const initalState={
    /*
    type:{
        'pageIndex':[artical]
    }
    */
}
/*
action params
{
  type:文章类型
  list:{
      'pageIndex':[artical]
  }
}
*/

const articalListReducer=(state=initalState,action)=>{
      switch (action.type) {
        case SET_ARTICALLIST:    
           let {type,list}=action.payload;
           let artical=state[type]?Object.assign({},state[type],list):list;
          return Object.assign({},state,{[type]:artical})
          break;
        default:
          return state
      }
}


export default articalListReducer
