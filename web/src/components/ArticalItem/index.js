import React,{Component} from 'react'
import PropTypes from 'prop-types'
import style from './ArticalItem.css'
export default class ArticalItem extends Component{
    constructor(props){
       super(props)
    }
    componentDidMount(){
      console.log(style)
      // console.log(this.props)
    }
    render(){
      let {title,headImg,content,createDate}=this.props.articalInfo
      return(
         <div className="articalItem">
             <div className={style.img}></div>
             <div className="articalInfo flexFull">
                   <h3>{title}</h3>
                   <p>{content}</p>
                   <p>{createDate}</p>
             </div>

         </div>
      )
    }
}
ArticalItem.propTypes={
  articalInfo:PropTypes.object.isRequired
}
