import  * as mock from '../mock'
import axios from 'axios';
const host=process.env.Node_ENV==='production'?'/':'http://localhost:8000/';
let fetch=(url,ops)=>{
    return new Promise((resolve,reject)=>{
          axios.post(url,{ops}).then((res)=>{
               resolve(res.data)
          })
    })
}

export const getArticalList=(ops)=>fetch(host+'home',ops)
export const getCollection=()=>fetch(host+'collectionInfo')
export const getArticalDetail=(ops)=>fetch(host+'getArticalDetail',ops)
export const getArchive=()=>fetch(host+'getArchive')
