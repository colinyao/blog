import React,{Component} from 'react'
import classNames from 'classnames'
import {NavLink} from 'react-router-dom'
import '../../static/css/header.less'
export default class Header extends Component{
    constructor(props){
          super(props)
          this.state={
                menuShow:false
          }
    }
    componentWillMount(){

    }
    _showMenu(){
         this.setState({menuShow:!this.state.menuShow})
    }
    render(){
        return(
                <header className="header">
                 <div className="banner sb">
                      <div className="logo"></div>
                      <div className="menuBtn" onClick={this._showMenu.bind(this)}>
                             <i></i>
                      </div>
                 </div>
                 <div className={classNames('menuNavigation',{active:this.state.menuShow})}>
                      <ul className={classNames('menu')}>
                             <li><NavLink to="/home" activeClassName="selected">首 页</NavLink></li>
                             <li><NavLink to="/category" activeClassName="selected">标签</NavLink></li>
                             <li><NavLink to="/archive" activeClassName="selected">归档</NavLink></li>
                             <li><NavLink to="/share" activeClassName="selected">分享</NavLink></li>
                       </ul>
                 </div>
               </header>
            )
    }
}
