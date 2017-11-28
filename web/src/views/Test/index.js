import React,{Component} from 'react';
import PropTypes from 'prop-types'
import trackMouseFilp from '../../assets/plugin/trackMouseFlip'

class Test extends Component{
       constructor(props){
            super(props)
       }
       componentDidMount(){
         new trackMouseFilp({element:document.querySelectorAll('.wrap')})
       }
       componentWillReceiveProps(){

       }
       render(){


            return(<div className="content">
                    <div className="wrap" style={style.wrap}>
                         <div style={style.content}><div style={style.test}>test</div><div style={style.test1}>test</div></div>
                    </div>
                </div>)
       }

}

let style={
  wrap:{
      width:'200px',
      height:'200px',
      margin:'100px 100px',
      perspective:'1000px',
      background:'#ff1100'
  },
  content:{
      width:'100%',
      height:'100%',
  },
  test:{
    width:'50px',
    height:'50px',
    background:'#eee'
  },
  test1:{
    width:'50px',
    height:'50px',
    background:'green'
  }
}


export default Test
