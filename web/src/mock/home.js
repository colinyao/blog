import Mock from 'mockjs'

export default Mock.mock('http://localhost:8000/home', {
        resultCode: '200',
        resultObject: {
             userInfo:{
                   name:'colin',
                   old:'26',
                   gender:'male',
                   profession:'前端工程师'
             },
             'articalList|20':[
               {
                     'id|+1': 1,
                     title:'@ctitle',
                     headImg:'../../static/img/mockImg.jpg',
                     content:'这是文章描述',
                     createDate:'@date'
               }
             ]
        },
        message: ''

});
