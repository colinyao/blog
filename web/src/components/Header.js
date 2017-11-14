import React,{Component} from 'react'
import classNames from 'classnames'
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
        return(<header className="header vc">
                <div className="logo"></div>
                 <div className="menuBtn" onClick={this._showMenu.bind(this)}>
                         <i></i>
                 </div>
                 <ul className={classNames('menu vc',{active:this.state.menuShow})}>
                       <li className="active"><a href="">首 页</a></li>
                       <li><a href="">关于我</a></li>
                       <li><a href="">项 目</a></li>
                       <li><a href="">留 言</a></li>
                 </ul>

            </header>)
    }
}
