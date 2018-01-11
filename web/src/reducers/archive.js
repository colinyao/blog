import {SET_ARCHIVE} from '../constants/ActionTypes.js'
const initalState={

}


const articalListReducer=(state=initalState,action)=>{
      switch (action.type) {
        case SET_ARCHIVE:    
          return Object.assign({},state,action.payload)
          break;
        default:
          return state
      }
}


export default articalListReducer
