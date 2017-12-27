import Mock from 'mockjs'

export const putHomeArticalList=Mock.mock('http://localhost:8000/home', {
        resultCode: '200',
        resultObject: {
             'list|10':[
               {
                     'id|+1': 1,
                     title:'@ctitle',
                     headImg:Mock.Random.image( '200x200'),
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
export const putCollectionInfo=Mock.mock('http://localhost:8000/collectionInfo',{
      resultCode:'200',
      resultObject:{
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
export const putUserInfo=Mock.mock('http://localhost:8000/user',{

})
