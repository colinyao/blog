import axios from 'axios'
export const home={
      getHomeInfo:()=>axios.post('http://localhost:8000/home')
}
