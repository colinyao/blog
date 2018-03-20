//react 4.0改用react-router-dom
import React, {
    Component
} from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Bundle from '../components/Bundle'
// 利用高阶组件bundle-loader实现按需加载
import Home from 'bundle-loader?lazy!../views/Home';
import Detail from 'bundle-loader?lazy!../views/Detail'
import Archive from 'bundle-loader?lazy!../views/Archive'
import Topical from 'bundle-loader?lazy!../views/Topical'
// import loadNews from 'bundle-loader?lazy!../containers/News.js';


// 利用高阶组件Bundle实现按需加载


const loadComponent=(loadHome)=>{

   return (props)=>(
     <Bundle load={loadHome}>
         {(Component) => <Component {...props}/>}
    </Bundle>
   )
}


// 包装 组合
// const FadingRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props => (
//       <Component {...props} />
//   )} />
// )



export default class Routes extends Component {

    render() {

        return (
            // Router 下只能包一个子元素

                       <div className="flexFull">
                            <Route path='/home' component={loadComponent(Home)}></Route>
                            <Route path='/topical' component={loadComponent(Topical)}></Route>
                            <Route path='/detail' component={loadComponent(Detail)}></Route>
                            <Route path='/archive' component={loadComponent(Archive)}></Route>
                        </div>


        )

    }
}
