import React,{PureComponent} from 'react'
import PropTypes from 'prop-types'
import styles from './Label.less'
import classNames from 'classnames'
const colorList=['#FFC0CB','#DC143C','#FF69B4','#DA70D6','#8B008B','#9400D3','#4169E1','#1E90FF','#00BFFF','#5F9EA0','#008B8B','#3CB371','#32CD32','#ADFF2F','#FFD700','#FFA500','#CD853F','#A0522D','#FF4500','#FF0000','#800000'];
const range=colorList.length;
export default class Label extends PureComponent{
    constructor(props){
       super(props)
    }
    componentDidMount(){
       // console.log(this.props)
    }
    render(){
      let {text,_classNames,_styles={}}=this.props;
      let color=colorList[Math.floor(Math.random()*range)];
      return(
         <div className={classNames(_classNames,styles.label)} style={_styles}>
               <span className={styles.labelLump} style={{backgroundColor:color}}>{text}</span><i style={{borderColor:'transparent transparent transparent '+color}}></i>
         </div>
      )
    }
}
Label.propTypes={
  text:PropTypes.string.isRequired,
  _style:PropTypes.object,
  _classNames:PropTypes.string
}
