import React,{Component} from 'react';
import '../../static/css/reset.less'
import '../../static/css/base.less'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Aside from '../components/Aside.js'
import Routes from '../routes/index.js'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import 'isomorphic-fetch';
const supportsHistory = 'pushState' in window.history
export default class App extends Component{
       constructor(props){
            super(props)
            this.state={
                msg:'0'
            }
       }
       componentDidMount(){


       }

       render(){
            return(
                <Router forceRefresh={!supportsHistory}>
                     <div className="wrapper">
                         <Header></Header>
                         <div className="contentBox flex">
                           <Routes></Routes>
                           <Aside></Aside>
                         </div>
                         <Footer></Footer>
                     </div>
                </Router>
                )
       }
}
