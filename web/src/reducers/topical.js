import {SET_TOPICAL} from '../constants/ActionTypes.js'
const initalState={
      list:[]
}
     // date:'@date',
     // num:5,
     // 'list|5':[{
     //   'id|+1':1,
     //   'title':'@ctitle'

const topicalReducer=(state=initalState,action)=>{

      switch (action.type) {
        case SET_TOPICAL:
          return {...state,list:[...state.list,...action.payload],load:true}
          break;
        default:
          return state
      }
}


export default topicalReducer
