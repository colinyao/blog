import Vue from 'vue'
import LoadingComponent from '../../src/components/Cloading/index.vue'
let $vm;
export default {
    install(Vue) {
        let Loading = Vue.extend(LoadingComponent)
        $vm = new Loading({
            el: document.createElement('div')
        })
        document.body.appendChild($vm.$el)
        const loading = {
            show: (options) => {
                let  tip=tip.text || '',
                     onShow=options.onShow || '',
                     onHide=options.onHide || '';
                 $vm.tip=tip;
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

        Vue.loading={
            loading
        }
        
        Vue.mixin({
            created: function() {
                this.$cele = Vue.loading
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
