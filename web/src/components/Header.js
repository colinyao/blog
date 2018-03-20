import React,{PureComponent} from 'react'
import classNames from 'classnames'
import {NavLink} from 'react-router-dom'
import '../../static/css/header.less'
import {withRouter} from 'react-router'
class Header extends PureComponent{
    constructor(props){
          super(props)
          this.state={
                menuShow:false
          }
    }
    componentWillMount(){

    }
    // shouldComponentUpdate(nextProps, nextState){
    //     if(this.state.menuShow!==nextState.menuShow){
    //         return true
    //     }
    //
    //
    //     return false
    // }
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
                             <li><NavLink to="/topical" activeClassName="selected">标签</NavLink></li>
                             <li><NavLink to="/archive" activeClassName="selected">归档</NavLink></li>
                             <li><NavLink to="/share" activeClassName="selected">分享</NavLink></li>
                       </ul>
                 </div>
               </header>
            )
    }
}
export default withRouter(Header)
