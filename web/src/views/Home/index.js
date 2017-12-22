import React,{Component} from 'react';
import PropTypes from 'prop-types'
//import {bindActionCreators} from 'react-redux'
import {connect} from 'react-redux'
import {queryArticalList,queryCollection} from '../../actions'
import classNames from 'classnames'
import {ArticalItem,Label} from '../../components'
import styles from './Home.less'


class Home extends Component{
       constructor(props){
            super(props)
            this.state={
                pageIndex:1
            }
       }
       componentWillMount(){
            this.props.queryArticalList({type:'totalList',pageIndex:this.state.pageIndex});

            this.props.queryCollection()
       }
       componentWillReceiveProps(){

       }
       render(){
          let {articalList,collectionInfo}=this.props,
              totalList=(typeof articalList.totalList==='object'&&articalList.totalList[this.state.pageIndex])?articalList.totalList[this.state.pageIndex].map((ele,i)=>{
                 return <ArticalItem _classNames={styles.articalItem} articalInfo={ele} key={i}></ArticalItem>
              }):'';
              let userInfo=collectionInfo

            return(<div className={styles.content}>

                   <div className={styles.mainContent}>
                       {totalList}
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
                                 {Array.isArray(userInfo.labels)?userInfo.labels.map((ele,index)=><Label text={ele} key={index} _classNames={styles.label}></Label>):''}
                           </div> 
                           <div>
                             
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

export default connect(mapStateToProps,{queryArticalList,queryCollection})(Home)
