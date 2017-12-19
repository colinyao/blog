import  * as mock from '../mock'
import axios from 'axios';
const host=process.env.Node_ENV==='production'?'/':'http://localhost:8000/';
let fetch=(url)=>{
    return axios(url)
}

export const home={
      getHomeInfo:()=>fetch(host+'home')
}
export const userInfo={
      getUserInfo:()=>fetch(host+'user')
}
