import React,{Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Detail.less'
import {getArticalDetail} from '../../api'
class Detail extends Component{
  constructor(){
      super()
      this.state={
          content:''
      }
  }
  componentWillMount(){

     this._getDetail();
  }
  _getDetail(){
      getArticalDetail().then(res=>{
          if(res.code==='200'){
              this.setState({content:res.rst.content})
          }
      })
  }
  render(){

     return(<div className={styles.wrapper}>
               <div dangerouslySetInnerHTML={{__html:this.state.content}}></div>
            </div>)
  }
}

export default Detail
