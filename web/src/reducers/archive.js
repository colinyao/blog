import {SET_ARCHIVE} from '../constants/ActionTypes.js'
const initalState={
      list:[]
}
     // date:'@date',
     // num:5,
     // 'list|5':[{
     //   'id|+1':1,
     //   'title':'@ctitle'

const archiveReducer=(state=initalState,action)=>{
      switch (action.type) {
        case SET_ARCHIVE:    
          return {...state,list:[...state.list,...action.payload],load:true}
          break;
        default:
          return state
      }
}


export default archiveReducer
