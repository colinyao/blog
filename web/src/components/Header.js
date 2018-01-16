import React,{Component} from 'react'
import classNames from 'classnames'
import {BrowserRouter as Router,Link} from 'react-router-dom'
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
             <Router>
                <header className="header">
                 <div className="banner sb">
                      <div className="logo"></div>
                      <div className="menuBtn" onClick={this._showMenu.bind(this)}>
                             <i></i>
                      </div>
                 </div>
                 <div className={classNames('menuNavigation',{active:this.state.menuShow})}>
                      <ul className={classNames('menu')}>
                             <li className="active"><Link to="/home">首 页</Link></li>
                             <li><a href="">标签</a></li>
                             <li><Link to="/archive">归档</Link></li>
                             <li><a href="">分享</a></li>
                       </ul>
                 </div>
               </header>
            </Router>
            )
    }
}
