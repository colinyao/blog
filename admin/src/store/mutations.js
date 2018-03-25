import Colin from '../assets/js/public.js'
import {UPDATE_USERINFO} from './constants.js';
export const mutations={
    [UPDATE_USERINFO](state,options){
         state.userInfo=Object.assign({},state.userInfo||{},options)
         Colin.setSS('state',state)
         return state;
    }
}
