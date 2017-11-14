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
             'articalList|20':{
                   title:'这是一篇技术文章',
                   img:'../../static/img/mockImg.jpg',
                   content:'这时文章描述',
                   createDate:'2017,11,11'
             }
        },
        message: ''

});
