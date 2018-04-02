import React,{Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Archive.less'
import {connect} from 'react-redux'
import {queryArchive} from '../../actions/index.js'
import classNames from 'classnames'
class Archive extends Component{
  constructor(){
      super()
      this._clickItem=this._clickItem.bind(this)
  }
  componentWillMount(){
       this.props.queryArchive();
  }
  _clickItem(id){
      console.log(id)
     //this.props.history.push('/detail/'+id)
  }
  render(){

     return(<div className="mainContent">
                    {this.props.archiveList.map((ele,i)=>{
                        return <dl className={styles.archive} key={ele,i}>
                                     <dt className={styles.archive_item}>{ele.name} ({ele.list.length})</dt>
                                     <dd className={styles.archiveItem_list}>
                                          <ul>
                                          {ele.list.map((_ele,i)=>
                                                <li className={classNames(styles.archiveItemList_item,'vc')} onClick={()=>{this._clickItem(_ele._id)}} key={i}><span>{i+1}</span><span>{_ele.update_time.substring(_ele.update_time.lastIndexOf('-')+1)}日</span><span>{_ele.title}</span></li>
                                          )}
                                          </ul>
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
