import React,{Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Topical.less'
import {connect} from 'react-redux'
import {queryTopical} from '../../actions/index.js'
import classNames from 'classnames'
class Topical extends Component{
  constructor(){
      super()
  }
  componentWillMount(){
       this.props.queryTopical();
  }

  render(){

     return(<div className="mainContent">
                    {this.props.topical.map(ele=>{
                        return <dl className={styles.archive} key={ele.topic}>
                                     <dt className={styles.archive_item}>{ele.topic} ({ele.num})</dt>
                                     <dd className={styles.archiveItem_list}>
                                          <ul>
                                          {ele.list.map((_ele,index)=>
                                                <li className={classNames(styles.archiveItemList_item,'vc')} key={_ele.createDate}><span>{index+1}</span><span>{_ele.title}</span></li>
                                          )}
                                          </ul>
                                     </dd>
                                  </dl>
                    })}

            </div>)
  }
}
const mapStateToProps=(state)=>({
    topical:state.topical.list
})
export default connect(mapStateToProps,{queryTopical})(Topical)
