import React,{Component} from 'react';
import PropTypes from 'prop-types'
import trackMouseFilp from '../../assets/plugin/trackMouseFlip'

class Home extends Component{
       constructor(props){
            super(props)
       }
       componentWillMount(){
          console.log(new trackMouseFilp())
       }
       componentWillReceiveProps(){

       }
       render(){


            return(<div className="content">
                   test
                </div>)
       }

}



export default Home
