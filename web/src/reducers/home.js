import {GET_HOME_INFO,INSERT_HOME_INFO} from '../constants/ActionTypes.js'
const initalState={
    articalList:[]
}

const homeReducer=(state=initalState,action)=>{

      switch (action.type) {
        case GET_HOME_INFO:
          return state
        case INSERT_HOME_INFO:
          return Object.assign({},state,action.payload)
        default:
          return state
      }
}


export default homeReducer
