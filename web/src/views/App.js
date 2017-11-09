import React,{Component} from 'react';
import '../../static/css/reset.less'
import '../../static/css/base.less'
import Header from '../components/Header.js'
export default class App extends Component{
       constructor(props){
            super(props)
       }
       render(){
            return(<div className="wrapper">
                     <Header></Header>
                </div>)
       }
}