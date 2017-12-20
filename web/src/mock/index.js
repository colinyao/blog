import Mock from 'mockjs'

export const putHomeArticalList=Mock.mock('http://localhost:8000/home', {
        resultCode: '200',
        resultObject: {
              userInfo:{
                     name:Mock.Random.cname(),
                     sex:'1',
                     avator:Mock.Random.image( '200x200'),
                     signature:Mock.Random.cparagraph( 3 ),
                     motto:Mock.Random.cparagraph(1),
                     login:true
              },
             'articalList|8':[
               {
                     'id|+1': 1,
                     title:'@ctitle',
                     headImg:Mock.Random.image( '200x200'),
                     content:Mock.Random.cparagraph(  ),
                     createDate:'@date',
                     reads:Mock.Random.integer(0,10000),
                     messages:Mock.Random.integer(0,200),
               }
             ]
        }
});
export const putUserInfo=Mock.mock('http://localhost:8000/user',{
      resultCode:'200',
      resultObject:{
           name:Mock.Random.cname(),
           sex:'1',
           avator:Mock.Random.image( '200x200'),
           signature:Mock.Random.cparagraph( 3 ),
   
      }
})
