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
import loadHome from 'bundle-loader?lazy!../views/Home';
import Test from '../views/Test'
// import loadNews from 'bundle-loader?lazy!../containers/News.js';


// 利用高阶组件Bundle实现按需加载

const Home = () => (
    <Bundle load={loadHome}>
          {(Home) => <Home  />}
     </Bundle>
)



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
            <Router>
                       <div>
                            <Route  path='/home' component={Home}></Route>
                            <Route  path='/test' component={Test}></Route>
                        </div>
            </Router>

        )

    }
}
