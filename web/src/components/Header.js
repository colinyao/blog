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
        return(<header className="header">
                 <div className="banner sb">
                      <div className="logo"></div>
                      <div className="menuBtn" onClick={this._showMenu.bind(this)}>
                             <i></i>
                      </div>
                 </div>

                 <div className={classNames('menuNavigation',{active:this.state.menuShow})}>
                      <ul className={classNames('menu')}>
                             <li className="active"><a href="">首 页</a></li>
                             <li><a href="">标签</a></li>
                             <li><a href="">归档</a></li>
                             <li><a href="">分享</a></li>
                       </ul>
                 </div>


            </header>)
    }
}
