import React,{Component} from 'react';
import PropTypes from 'prop-types'
//import {bindActionCreators} from 'react-redux'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {queryArticalList,queryCollection,setPageIndex} from '../../actions'
import classNames from 'classnames'
import {ArticalItem,Label} from '../../components'
import styles from './Home.less'

var Pagination=require('../../assets/plugin/pagination.js')

class Home extends Component{
       constructor(props){
            super(props)



       }
       componentWillMount(){
            this.props.queryArticalList({type:'totalList',pageIndex:1});
            this.props.queryCollection()
       }
       componentWillReceiveProps(nextProps){

       }
       componentDidMount(){
           var pagination=new Pagination({container:document.getElementById('pagination'),total:6})
           pagination.addListener('change',(index)=>{
                 let {articalList}=this.props
                if(typeof articalList.totalList==='object'&&typeof articalList.totalList.list==='object'&&articalList.totalList.list[index]){

                    this.props._setPageIndex({type:'totalList',pageIndex:index})
                }else{
                   this.props.queryArticalList({type:'totalList',pageIndex:index})
                }
           })
       }
       _clickItem(id){

          this.props.history.push('/detail/'+id)
       }
       render(){
         
          let {articalList,collectionInfo}=this.props,
              totalList=(typeof articalList.totalList==='object'&&typeof articalList.totalList.list==='object'&&articalList.totalList.list[articalList.totalList.pageIndex])?articalList.totalList.list[articalList.totalList.pageIndex].map((ele,i)=>{
                 return <ArticalItem _classNames={styles.articalItem} articalInfo={ele} key={i} onClick={this._clickItem.bind(this,ele.id)}></ArticalItem>
              }):'';
          let {userInfo={},labels=[],latestArticals=[]}=collectionInfo
            return(<div className={styles.content}>

                   <div className={styles.mainContent}>
                       {totalList}
                       <div id="pagination" className={styles.pagination}></div>
                   </div>
                   <div className={styles.aside}>
                          <div className={styles.personlArea}>
                                  <div className='flex'>
                                         <div className={styles.avator} style={{backgroundImage:'url('+userInfo.avator+')'}}></div>
                                         <div className='ml10 flexFull'>
                                              <p>{userInfo.name}</p>
                                              <p className={styles.motto}>{userInfo.motto}</p>
                                          </div>
                                   </div>

                           </div>
                           <div className={styles.aside_item}>
                                 <h4>标签分类</h4>
                                 {Array.isArray(labels)?labels.map((ele,index)=><Label text={ele} key={index} _classNames={styles.label}></Label>):''}
                           </div>
                           <div className={styles.aside_item}>
                                  <h4>最新文章</h4>
                                  <ul className={styles.latestArticals}>
                                         {latestArticals.map((ele,index)=><li key={index}><span>{ele.title}</span><span>{ele.createDate}</span></li>)}
                                  </ul>
                           </div>
                     </div>
                </div>)
       }

}

Home.propTypes={
    articalList:PropTypes.object.isRequired,
    collectionInfo:PropTypes.object.isRequired,
    questArticalList:PropTypes.func,
    queryCollection:PropTypes.func
}

const mapStateToProps=(state)=>({
     articalList:state.articalList,
     collectionInfo:state.collectionInfo
})
const mapDispatchToProps=(dispatch)=>({
      ...bindActionCreators({_setPageIndex:setPageIndex,queryCollection,queryArticalList},dispatch),
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
