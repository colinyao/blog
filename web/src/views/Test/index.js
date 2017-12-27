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


            return(<div className="content" style={style.content}>
                    <div className="wrap" style={style.wrap}>
                         <div style={style.ele}><div style={style.test}>test</div><div style={style.test1}>test</div></div>
                    </div>
                </div>)
       }

}

let style={
  content:{
    perspective:'2000px'
  },
  wrap:{
      width:'200px',
      height:'200px',
      margin:'100px 100px',
      transformStyle:'preserve-3d',
      background:'#ff1100'
  },
  ele:{
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
