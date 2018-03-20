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
            this._clickItem=this._clickItem.bind(this)
       }
       componentWillMount(){
            this.props.queryArticalList({type:'totalList',pageIndex:1});

       }
       componentWillReceiveProps(nextProps){

       }
       componentDidMount(){
           var pagination=new Pagination({container:document.getElementById('pagination'),total:20})
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
                 return <ArticalItem _classNames={styles.articalItem} articalInfo={ele} key={i} onClick={this._clickItem}></ArticalItem>
              }):'';
              // if(!this.state.totalList.length&&typeof articalList.totalList==='object'&& typeof articalList.totalList.list==='object'&&articalList.totalList.list[articalList.totalList.pageIndex]){
              //         new Promise((resolve,reject)=>{
              //             ArticalItem(resolve)
              //         }).then((res)=>{
              //           Com=res;
              //           this.setState({
              //             totalList:[<Com />]
              //           })
              //         })
              //     }
          let {userInfo={},labels=[],latestArticals=[]}=collectionInfo
            return(<div className={styles.content}>
                       <div className={styles.mainContent}>
                           {totalList}
                           <div id="pagination" className={styles.pagination}></div>
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
