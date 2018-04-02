// import  * as mock from '../mock'
import axios from 'axios';
const host=process.env.Node_ENV==='production'?'/':'http://localhost:3000/api/';
let fetch=(url,ops)=>{
    return new Promise((resolve,reject)=>{
          axios.post(url,ops).then((res)=>{
               resolve(res.data)
          })
    })
}

export const getArticalList=(ops)=>fetch(host+'searchList',ops)
export const getCollection=()=>fetch(host+'searchCollection')
export const getArticalDetail=(ops)=>fetch(host+'searchArtical',ops)
export const getArchive=()=>fetch(host+'searchArchive')
export const getTopical=()=>fetch(host+'searchTopical')
