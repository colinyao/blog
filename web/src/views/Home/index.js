import React,{Component} from 'react';
import PropTypes from 'prop-types'
//import {bindActionCreators} from 'react-redux'
import {connect} from 'react-redux'
import {getHomeInfo} from '../../actions'
import classNames from 'classnames'
import ArticalItem from '../../components/ArticalItem'
import style from './Home.less'


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
          let {homeInfo}=this.props,
              articalList=homeInfo.articalList.length?homeInfo.articalList.map((ele,i)=>{
            return <ArticalItem articalInfo={ele} key={i}></ArticalItem>
          }):'';

            return(<div className={style.content}>

                   <div className={style.mainContent}>
                       <div className={style.areaTitle}><p>文章推荐</p></div>
                       {articalList}
                   </div>
                   <div className={style.aside}>
                           <div className={style.personlArea}>
                                   <div className={style.avator}><img src="" alt=""/></div>
                           </div>
                    </div>
                </div>)
       }

}

Home.propTypes={
    homeInfo:PropTypes.object,
    getHomeInfo:PropTypes.func
}

const mapStateToProps=(state)=>({
     homeInfo:state.homeReducer
})

export default connect(mapStateToProps,{getHomeInfo})(Home)
