import React,{Component} from 'react'
import PropTypes from 'prop-types'
export default class ArticalItem extends Component{
    constructor(props){
       super(props)
    }
    componentWillMount(){
      console.log(this.props)
    }
    render(){
      let {title,img,content,createDate}=this.props.articalInfo
      return(
         <div className="articalItem">
             <h3>{title}</h3>
             <p>{content}</p>
             <p>{createDate}</p>
         </div>
      )
    }
}
ArticalItem.propTypes={
  articalInfo:PropTypes.object.isRequired
}
