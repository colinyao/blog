import Mock from 'mockjs'

export const putHomeArticalList=Mock.mock('http://localhost:8000/home', {
        code: '200',
        msg:'ok',
        rst: {
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
export const putArticalDetail=Mock.mock('http://localhost:8000/getArticalDetail',{
  code:'200',
  msg:'ok',
  rst:{
      content:`<section class="KolEditor" style="undefined"><section><section style="display:flex;align-items:center;">
            <p style="width:100px;text-align:right;flex-shrink:0;">1583年</p>
            <section style="flex-shrink:1;display:flex;align-items:flex-start;">
                <section style="width:11px;margin:0px 10px;flex-shrink:0;">
                    <img src="http://kol-statics.oss-cn-beijing.aliyuncs.com/editor/1550369e79d183eb17c805ce401d5468856e7a.png" style="vertical-align:top;"/>
                </section>
                <section style="flex-shrink:1;">
                    <p style="text-align:left;margin:0px auto;font-size:18px;line-height:1;">
                        早期租地
                    </p>
                    <p style="text-align:left;margin:0px auto;font-size:14px;line-height:1.3;margin-top:8px;">
                        在澳门居留的葡萄牙人自行成立澳门议事会进行葡萄牙社区的自治管理。
                    </p>
                </section>
            </section>
        </section>
        <section style="display:flex;align-items:center;">
            <p style="width:100px;text-align:right;flex-shrink:0;">
                1623年
            </p>
            <section style="flex-shrink:1;display:flex;align-items:flex-start;">
                <section style="width:11px;margin:0px 10px;flex-shrink:0;">
                    <img src="http://kol-statics.oss-cn-beijing.aliyuncs.com/editor/1550361d2ffa88e2958effe9f5fa8521a03280.png" style="vertical-align:top;"/>
                </section>
                <section style="flex-shrink:1;">
                    <p style="text-align:left;margin:0px auto;font-size:18px;line-height:1;">
                        变相强占
                    </p>
                    <p style="text-align:left;margin:0px auto;font-size:14px;line-height:1.3;margin-top:8px;">
                        葡萄牙任命马士加路也为澳督，并正式到澳门就职。
                    </p>
                </section>
            </section>
        </section>
        <section style="display:flex;align-items:center;">
            <p style="width:100px;text-align:right;flex-shrink:0;">
                1862年
            </p>
            <section style="flex-shrink:1;display:flex;align-items:flex-start;">
                <section style="width:11px;margin:0px 10px;flex-shrink:0;">
                    <img src="http://kol-statics.oss-cn-beijing.aliyuncs.com/editor/1550368638f8669c4856467d1a3f96052842cc.png" style="vertical-align:top;"/>
                </section>
                <section style="flex-shrink:1;">
                    <p style="text-align:left;margin:0px auto;font-size:18px;line-height:1;">
                        早期租地
                    </p>
                    <p style="text-align:left;margin:0px auto;font-size:14px;line-height:1.3;margin-top:8px;">
                        在澳门居留的葡萄牙人自行成立澳门议事会进行葡萄牙社区的自治管理。
                    </p>
                </section>
            </section>
        </section>
        <section style="display:flex;align-items:center;">
            <p style="width:100px;text-align:right;flex-shrink:0;">
                1583年
            </p>
            <section style="flex-shrink:1;display:flex;align-items:flex-start;">
                <section style="width:11px;margin:0px 10px;flex-shrink:0;">
                    <img src="http://kol-statics.oss-cn-beijing.aliyuncs.com/editor/15503620dacbcb44dfca525cefdb09f128f900.png" style="vertical-align:top;"/>
                </section>
                <section style="flex-shrink:1;">
                    <p style="text-align:left;margin:0px auto;font-size:18px;line-height:1;">
                        条约定案
                    </p>
                    <p style="text-align:left;margin:0px auto;font-size:14px;line-height:1.3;margin-top:8px;">
                        葡萄牙曾与清政府草签《中葡和好贸易条约》，欲将澳门地区转为葡萄牙之属地，被发现而告终。
                    </p>
                </section>
            </section>
        </section>
        <section style="display:flex;align-items:center;">
            <p style="width:100px;text-align:right;flex-shrink:0;">
                1986年
            </p>
            <section style="flex-shrink:1;display:flex;align-items:flex-start;">
                <section style="width:11px;margin:0px 10px;flex-shrink:0;">
                    <img src="http://kol-statics.oss-cn-beijing.aliyuncs.com/editor/155036d4e987907ea951de2a30b75b1f172e11.png" style="vertical-align:top;"/>
                </section>
                <section style="flex-shrink:1;">
                    <p style="text-align:left;margin:0px auto;font-size:18px;line-height:1;">
                        中葡谈判
                    </p>
                    <p style="text-align:left;margin:0px auto;font-size:14px;line-height:1.3;margin-top:8px;">
                        中国与葡萄牙政府正式发布新闻公报，宣布6月30日在北京展开澳门问题的谈判。
                    </p>
                </section>
            </section>
        </section>
        <section style="display:flex;align-items:center;">
            <p style="width:100px;text-align:right;flex-shrink:0;">
                1999年
            </p>
            <section style="flex-shrink:1;display:flex;align-items:flex-start;">
                <section style="width:11px;margin:0px 10px;flex-shrink:0;">
                    <img src="http://kol-statics.oss-cn-beijing.aliyuncs.com/editor/155036226ce7eb170b82c23056890848427a25.png" style="vertical-align:top;"/>
                </section>
                <section style="flex-shrink:1;">
                    <p style="text-align:left;margin:0px auto;font-size:18px;line-height:1;">
                        正式回归
                    </p>
                    <p style="text-align:left;margin:0px auto;font-size:14px;line-height:1.3;margin-top:8px;">
                        中国政府恢复对澳门行使主权，中华人民共和国澳门特别行政区成立，葡萄牙共和国结束统治澳门。
                    </p>
                </section>
            </section>
        </section>
    </section>
</section>
<p>
    <br/>
</p>`
  }
})
export const putArchive=Mock.mock('http://localhost:8000/getArchive',{
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
