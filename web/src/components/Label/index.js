import React,{Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Label.less'
export default class Label extends Component{
    constructor(props){
       super(props)
    }
    componentDidMount(){
       // console.log(this.props)
    }
    render(){
      let {text}=this.props
      return(
         <div className={styles.label}>
               {text}
         </div>
      )
    }
}
ArticalItem.propTypes={
  text:PropTypes.string.isRequired
}
