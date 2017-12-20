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
            return <ArticalItem articalInfo={ele} key={i}></ArticalItem>
          }):'';

            return(<div className={styles.content}>

                   <div className={styles.mainContent}>
                       <div className={styles.areaTitle}><p>文章推荐</p></div>
                       {articalList}
                   </div>

                  
                     <div className={styles.aside}>
                           <div className={styles.personlArea}>
                                   <div className="vc">
                                         <div className={styles.avator} style={{backgroundImage:'url('+userInfo.avator+')'}}></div>
                                         <p className="ml20">{userInfo.name}</p>                               
                                   </div>
                                   <div className={classNames('mt10',styles.motto)}>座右铭：{userInfo.motto}</div>
                                   <div className="label"></div>
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
