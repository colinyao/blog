import React,{Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './ArticalItem.less'
export default class ArticalItem extends Component{
    constructor(props){
       super(props)
    }
    componentDidMount(){

      // console.log(this.props)
    }
    render(){
      let {title,headImg,content,createDate}=this.props.articalInfo
      return(
         <div className={classNames('flex',styles.articalItem)}>
             <div className={styles.img}></div>
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
