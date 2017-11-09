import React,{Component} from 'react'
import '../../static/css/header.less'
export default class Header extends Component{
    constructor(props){
          super(props)
    }
    componentWillMount(){
        
    }
    render(){
        return(<header className="header vc">
                <div className="logo"></div>
                 <ul className="menu vc">
                       <li className="active"><a href="">首 页</a></li>
                       <li><a href="">关于我</a></li>
                       <li><a href="">项 目</a></li>
                       <li><a href="">留 言</a></li>
                 </ul>
            </header>)
    }
}
