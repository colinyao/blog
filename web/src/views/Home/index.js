import React,{Component} from 'react';
import PropTypes from 'prop-types'
//import {bindActionCreators} from 'react-redux'
import {connect} from 'react-redux'
import {getHomeInfo} from '../../actions'
import classNames from 'classnames'
import {ArticalItem,Label} from '../../components'
import styles from './Home.less'


class Home extends Component{
       constructor(props){
            super(props)
       }
       componentWillMount(){
            this.props.getHomeInfo();
       }
       componentWillReceiveProps(){

       }
       render(){
          let {homeInfo,userInfo}=this.props,
              articalList=homeInfo.articalList.length?homeInfo.articalList.map((ele,i)=>{
            return <ArticalItem _classNames={styles.articalItem} articalInfo={ele} key={i}></ArticalItem>
          }):'';
  
            return(<div className={styles.content}>

                   <div className={styles.mainContent}>
                       <div className={classNames('mb10',styles.areaTitle)}><h3>文章推荐</h3></div>
                       {articalList}
                   </div>                  
                   <div className={styles.aside}>
                          <div className={styles.personlArea}>
                                  <div className="flex">
                                         <div className={styles.avator} style={{backgroundImage:'url('+userInfo.avator+')'}}></div>
                                         <div className="ml10 flexFull">
                                              <p>{userInfo.name}</p>
                                              <p className={styles.motto}>{userInfo.motto}</p>
                                          </div>                               
                                   </div>
                                   {Array.isArray(userInfo.labels)?userInfo.labels.map((ele,index)=><Label text={ele} key={index} _classNames={styles.label}></Label>):''}
                           </div>

                     </div>
                </div>)
       }

}

Home.propTypes={
    homeInfo:PropTypes.object,
    userInfo:PropTypes.object,
    getHomeInfo:PropTypes.func
}

const mapStateToProps=(state)=>({
     homeInfo:state.homeReducer,
     userInfo:state.userInfoReducer
})

export default connect(mapStateToProps,{getHomeInfo})(Home)
