import {GET_USER_INFO,INSERT_USER_INFO} from '../constants/ActionTypes.js'
const initalState={
    userInfo:{}
}

const userInfoReducer=(state=initalState,action)=>{
      switch (action.type) {
        case GET_USER_INFO:
          return state
        case INSERT_USER_INFO:
          return Object.assign({},state,action.payload)
        default:
          return state
      }
}


export default userInfoReducer
