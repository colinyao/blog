import React,{PureComponent} from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
//import {bindActionCreators} from 'react-redux'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {queryCollection} from '../actions'
import {NavLink} from 'react-router-dom'
import {Label} from '../components'
import '../../static/css/aside.less'
class Aside extends PureComponent{
    constructor(props){
          super(props)
    }
    componentWillMount(){
        this.props.queryCollection()
    }
    _showMenu(){
         this.setState({menuShow:!this.state.menuShow})
    }
    render(){
      let {collectionInfo}=this.props,
          {userInfo={},labels=[],latestArticals=[]}=collectionInfo
        return(
              <div className="aside">
                     <div className="aside-personlArea">
                             <div className='flex'>
                                    <div className="aside-avator" style={{backgroundImage:'url('+userInfo.avator+')'}}></div>
                                    <div className='ml10 flexFull'>
                                         <p>{userInfo.name}</p>
                                         <p className="aside-motto">{userInfo.motto}</p>
                                     </div>
                              </div>

                      </div>
                      <div className="aside-aside_item">
                            <h4>标签分类</h4>
                            {Array.isArray(labels)?labels.map((ele,index)=><Label text={ele} key={index} _classNames={"aside-label"}></Label>):''}
                      </div>
                      <div className="aside-aside_item">
                             <h4>最新文章</h4>
                             <ul className="aside-latestArticals">
                                    {latestArticals.map((ele,index)=><li key={index}><span>{ele.title}</span><span>{ele.createDate}</span></li>)}
                             </ul>
                      </div>
                </div>
            )
    }
}
Aside.propTypes={
    collectionInfo:PropTypes.object.isRequired,
    queryCollection:PropTypes.func
}

const mapStateToProps=(state)=>({
     collectionInfo:state.collectionInfo
})
const mapDispatchToProps=(dispatch)=>({
      ...bindActionCreators({queryCollection},dispatch),
})
export default connect(mapStateToProps,mapDispatchToProps)(Aside)
