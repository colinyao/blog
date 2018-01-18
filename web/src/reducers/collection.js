import {SET_COLLECTIONINFO_INFO} from '../constants/ActionTypes.js'
const initalState={
    
}
           // userInfo:{
           //     name:Mock.Random.cname(),
           //     avator:Mock.Random.image( '200x200'),
           //     motto:Mock.Random.cparagraph( 2 )
           // },
           // 'labels|5':[Mock.Random.string(3,8)],
           // 'latestArticals|8':[{
           //           'id|+1': 1,
           //           title:'@ctitle',
           //           createDate:'@date'
           //     }],
           //  'recommendBlogs|5':[{
           //       title:'@title',
           //       url:''
           //  }]
const collectionReducer=(state=initalState,action)=>{
      switch (action.type) {
        case SET_COLLECTIONINFO_INFO:
          return {...state,...action.payload,load:true}
          break;
        default:
          return state
      }
}


export default collectionReducer
