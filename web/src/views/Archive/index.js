import React,{Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Archive.less'

class Archive extends Component{
  constructor(){
      super()
      this.state={

      }
  }
  componentWillMount(){

  }

  render(){

     return(<div className={styles.wrapper}>
                <ul className={styles.archive}>
                    <li className={styles.archive_item}>
                         <ul className={styles.archiveItem_list}>
                             <li className={styles.archiveItemList_item}></li>
                         </ul>
                    </li>
                </ul>
            </div>)
  }
}

export default Archive
