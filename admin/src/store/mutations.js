import Colin from '../assets/js/public.js'
import {UPDATE_USERINFO} from './constants.js';
export const mutations={
    [UPDATE_USERINFO](state,options){
         let arg=[].slice.call(arguments)
         arg.unshift('userInfo')  //插入Key
         Colin.updateStoreAndSS.apply(null,arg)
    }
}