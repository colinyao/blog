import React,{Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Archive.less'
import {connect} from 'react-redux'
import {queryArchive} from '../../actions/index.js'
class Archive extends Component{
  constructor(){
      super()
  }
  componentWillMount(){
       this.props.queryArchive();
  }
  
  render(){
   
     return(<div className={styles.wrapper}>
                
                    {this.props.archiveList.map(ele=>{
                        return <dl className={styles.archive} key={ele.date}>
                                     <dt className={styles.archive_item}>{ele.date}({ele.num})</dt>
                                     <dd className={styles.archiveItem_list}>
                                          {ele.list.map(_ele=><ul>
                                                <li className={styles.archiveItemList_item} key={_ele.createDate}><span>{_ele.createDate.substring(_ele.createDate.lastIndexOf('-')+1)}日</span><span>{_ele.title}</span></li>
                                          </ul>)}
                                     </dd>                                     
                                  </dl>   
                    })}
               
            </div>)
  }
}
const mapStateToProps=(state)=>({
    archiveList:state.archive.list
})
export default connect(mapStateToProps,{queryArchive})(Archive)
