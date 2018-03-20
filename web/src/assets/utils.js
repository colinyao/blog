import axios from 'axios';

const utils={
    scriptLoad(url){
        let script=document.createElement('script');
        script.src=url;
        document.body.appendChild(script);
        return new Promise((resolve,reject)=>{
             script.onload=function(){
                 resolve('ok')
             }
             script.onerror=function(e){
                 resolve('error:'+e)
             }
        })

    }
}
export default utils
