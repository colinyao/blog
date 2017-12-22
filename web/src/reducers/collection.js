import {SET_COLLECTIONINFO_INFO} from '../constants/ActionTypes.js'
const initalState={
    
}

const collectionReducer=(state=initalState,action)=>{
      switch (action.type) {
        case SET_COLLECTIONINFO_INFO:
          return {...state,...action.payload}
          break;
        default:
          return state
      }
}


export default collectionReducer
