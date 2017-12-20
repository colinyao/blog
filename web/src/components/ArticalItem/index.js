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
      let {title,headImg,content,createDate,messages,reads}=this.props.articalInfo
      return(
         <div className={classNames('flex',styles.articalItem)}>
             <div className={styles.img}><img src={headImg} alt=""/></div>
             <div className={classNames(styles.articalInfo,'flexFull')}>
                   <h3 className={styles.title}>{title}</h3>
                   <p className={styles.abstract}>{content}</p>
                   <ul className={styles.additional}>
                       <li className={styles.reads}><span>{reads}</span></li>
                       <li className={styles.messages}><span>{messages}</span></li>
                       <li>{createDate}</li>
                   </ul>
             </div>
         </div>
      )
    }
}
ArticalItem.propTypes={
  articalInfo:PropTypes.object.isRequired
}
