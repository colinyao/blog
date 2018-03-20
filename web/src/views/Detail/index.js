import React,{Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Detail.less'
import {getArticalDetail} from '../../api'
import utils from '../../assets/utils'
import Remarkable from 'remarkable';


class Detail extends Component{
  constructor(){
      super()
      this.state={
          content:''
      }
  }
  componentWillMount(){
     window.scrollTo(0,0)
     this._getDetail();
  }
  componentDidMount(){
    // Promise.all(scriptsLoad).then((res)=>{
    //   $(function () {
    //       var testEditor = editormd.markdownToHTML("doc-content", {//注意：这里是上面DIV的id
    //           htmlDecode: "style,script,iframe",
    //           emoji: true,
    //           taskList: true,
    //           tex: true, // 默认不解析
    //           flowChart: true, // 默认不解析
    //           sequenceDiagram: true, // 默认不解析
    //           codeFold: true,
    //      })
    //    });
    // })

  }
  _getDetail(){
      getArticalDetail().then(res=>{
          if(res.code==='200'){
              this.setState({content:res.rst.content})
          }
      })
  }
  rawMarkup(html){
    var md = new Remarkable();

    var rawMarkup = md.render(html);
    return {__html:rawMarkup};
  }
  render(){


     return(<div className={styles.wrapper}>
               {/* <div dangerouslySetInnerHTML={{__html:this.state.content}}></div> */}
               <div id="doc-content">
                    <div dangerouslySetInnerHTML={this.rawMarkup(this.state.content)}></div>



                </div>
            </div>)
  }
}

export default Detail
