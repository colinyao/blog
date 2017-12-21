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
      let {title,headImg,content,createDate,messages,reads}=this.props.articalInfo,
           {type,_classNames,_styles={}}=this.props;

      return(
         <div className={classNames(styles.articalItem,_classNames)} style={_styles}>
             <div className='flex'>
                     {type=='1'?<h3 className={styles.title}>{title}</h3>:''}
                <div className={styles.img}><img src={headImg} alt=""/></div>
                     <div className={classNames(styles.articalInfo,'flexFull')}>
                           <div className="flexColumn flexFull">
                                  {type!='1'?<h3 className={styles.title}>{title}</h3>:''}
                                   <p className={classNames(styles.abstract)}>{content}</p>                      
                           </div>
                           <ul className={styles.additional}>
                               <li className={styles.reads}><span>{reads}</span></li>
                               <li className={styles.messages}><span>{messages}</span></li>
                               <li>{createDate}</li>
                           </ul>
                     </div>            
             </div>

         </div>
      )
    }
}
ArticalItem.propTypes={
  articalInfo:PropTypes.object.isRequired,
  _classNames:PropTypes.string,
  _styles:PropTypes.string
}
