import Vue from 'vue'
import ToastComponent from '../../src/components/Toast/index.vue'
export default {
    install(Vue){
        console.log(1)
         let Toast=Vue.extend(ToastComponent);
         let $vm=new Toast({el: document.createElement('div')})
         document.body.appendChild($vm.$el);

         const toast={
               show:(options)=>{
                    let onShow=options.onShow ||'',
                        onHide=options.onHide || '';
                    $vm.text=options.text || '';
                    $vm.type=options.type || 'normal';
                    $vm.currentVal=true
                    $vm.$watch('currentVal',handleWatch)
                     function handleWatch(newVal){
                         newVal?typeof onShow ==='function'?onShow():'':typeof onHide ==='function'?onHide():''
                     }
               },
               hide:()=>{
                    $vm.currentVal=false
               }
         }
        Vue.plugin=Object.assign({},Vue.plugin,{toast:toast})
        Vue.mixin({
            created: function() {
                this.$cele = Vue.plugin
            }
        })
    } 
} 