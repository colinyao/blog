import React,{Component} from 'react';
import '../../static/css/reset.less'
import '../../static/css/base.less'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Routes from '../routes/index.js'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import 'isomorphic-fetch';
export default class App extends Component{
       constructor(props){
            super(props)
       }
       render(){
            return(
                <Router>
                     <div className="wrapper">
                         <Header></Header>
                         <Routes></Routes>
                         <Footer></Footer>
                     </div>
                </Router>
                )
       }
}
