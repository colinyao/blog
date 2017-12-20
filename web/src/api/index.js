import  * as mock from '../mock'
import axios from 'axios';
const host=process.env.Node_ENV==='production'?'/':'http://localhost:8000/';
let fetch=(url)=>{
    return new Promise((resolve,reject)=>{
          axios(url).then((res)=>{
               resolve(res.data)
          })
    }) 
}

export const home={
      getHomeInfo:()=>fetch(host+'home')
}
export const userInfo={
      getUserInfo:()=>fetch(host+'user')
}
