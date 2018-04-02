import Mock from 'mockjs'

export const putHomeArticalList=Mock.mock('http://localhost:8000/searchList', {
        code: '200',
        msg:'ok',
        rst: {
             'list|10':[
               {
                     'id|+1': 1,
                     title:'@ctitle',
                     //headImg:Mock.Random.image( '200x200'),
                     abstract:Mock.Random.cparagraph(  ),
                     createDate:'@date',
                     reads:Mock.Random.integer(0,10000),
                     messages:Mock.Random.integer(0,200),
               }
             ]
        }
});
/*
    userInfo:{
        name:'',
        avator:''
        motto:''
    },
    lables:[''],
    latestArticals:[],
    recommendBlogs:[]
*/
export const putCollectionInfo=Mock.mock('http://localhost:8000/searchCollection',{
      code:'200',
      msg:'ok',
      rst:{
           userInfo:{
               name:Mock.Random.cname(),
               avator:Mock.Random.image( '200x200'),
               motto:Mock.Random.cparagraph( 2 )
           },
           'labels|5':[Mock.Random.string(3,8)],
           'latestArticals|8':[{
                     'id|+1': 1,
                     title:'@ctitle',
                     createDate:'@date'
               }],
            'recommendBlogs|5':[{
                 title:'@title',
                 url:''
            }]

      }
})
export const putArticalDetail=Mock.mock('http://localhost:8000/searchArtical',{
  code:'200',
  msg:'ok',
  rst:{

  }
})
export const putArchive=Mock.mock('http://localhost:8000/searchArchive',{
  code:'200',
  msg:'ok',
  'rst|5':[{
     date:'@date',
     num:5,
     'list|5':[{
       'id|+1':1,
       'title':'@ctitle',
       createDate:'@date'
     }]
  }]
})
export const putTopical=Mock.mock('http://localhost:8000/searchTopical',{
  code:'200',
  msg:'ok',
  'rst|5':[{
     topic:'@ctitle',
     num:5,
     'list|5':[{
       'id|+1':1,
       'title':'@ctitle',
       createDate:'@date'
     }]
  }]
})
