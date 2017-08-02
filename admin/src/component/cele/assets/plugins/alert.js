import Vue from 'vue'
import AlertComponent from '../../src/components/Calert/index.vue'
let $vm;
export default {
    install(Vue) {
        let Alert = Vue.extend(AlertComponent)
        $vm = new Alert({
            el: document.createElement('div')
        })
        document.body.appendChild($vm.$el)


        const alert = {
            show: (options) => {
                let title=options.title || '',
                     text=options.text || '',
                     shadow=options.shadow || true,
                     onShow=options.onShow || '',
                     onHide=options.onHide || '';
                 $vm.title=title;
                 $vm.text=text;
                 $vm.currentVal=true
                 $vm.$watch('currentVal',handleWatch)
                 function handleWatch(newVal){
                     newVal?typeof onShow ==='function'?onShow():'':typeof onHide ==='function'?onHide():''
                 }
            },
            hide: () => {
                $vm.currentVal = false
            }
        }

        Vue.plugin=Object.assign({},Vue.plugin,{alert:alert})
        
        Vue.mixin({
            created: function() {
                this.$cele = Vue.plugin
            }
        })
    }
}
// this.$cele.alert.show({
//   title:'',
//   text:'',
//   shadow:'',
//   onShow:fn,
//   onHide:fn
// })

// this.$cele.alert.hide()
