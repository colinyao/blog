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
             this.props.getHomeInfo();
       }
       componentWillReceiveProps(){

       }
       render(){
            return(<div className="content">

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
