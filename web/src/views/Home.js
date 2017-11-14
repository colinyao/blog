import React,{Component} from 'react';
import PropTypes from 'prop-types'
// import {bindActionCreators} from 'react-redux'
import {connect} from 'react-redux'
import {getHomeInfo} from '../actions'
import mock from '../mock/home.js'
class Home extends Component{
       constructor(props){
            super(props)
       }
       componentWillMount(){
         console.log(this.props)
             this.props.getHomeInfo();
       }
       componentWillReceiveProps(){
             console.log(this.props)
       }
       render(){
            return(<div className="content">

                </div>)
       }
}

Home.propTypes={
    homeInfo:PropTypes.Object,
    getHomeInfo:PropTypes.func
}

const mapStateToProps=(state)=>({
     homeInfo:state.goodsReducer
})
export default connect(mapStateToProps,{getHomeInfo})(Home)
