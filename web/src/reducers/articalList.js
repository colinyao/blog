import {SET_ARTICALLIST,SET_PAGEINDEX} from '../constants/ActionTypes.js'
const initalState={
    /*
    total:{
        'pageIndex':pageIndex,
        list:{
              pageIndex:[artical]
        }
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
           //如果type没传默认为
           var {type='totalList',list,pageIndex,total}=action.payload;
           // if(state[type]&&state[type]['list']){
           //    state[type]=Object.assign({},state[type],{list:Object.assign(state[type]['list'],list),pageIndex:pageIndex})
           // }else{
           //    state[type]={}
           //    state[type]={
           //        pageIndex:pageIndex,
           //        list:list
           //    }
           // }

          return Object.assign({},state,state[type]&&state[type]['list']?{[type]:{'list':Object.assign({},state[type]['list'],list),'pageIndex':pageIndex,total:total}}:{[type]:{'pageIndex':pageIndex,'list':list,total:total}})
          break;
        case SET_PAGEINDEX:
           var {type='totalList',pageIndex}=action.payload;
           return Object.assign({},state,{[type]:{...state[type],pageIndex:pageIndex}});
           break;
        default:
           return state
      }
}


export default articalListReducer
