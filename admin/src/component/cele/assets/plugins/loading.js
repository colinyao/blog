import Vue from 'vue'
import LoadingComponent from '../../src/components/loading/index.vue'
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
                let {text,onShow,onHide}=options;
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

        Vue.plugin=Object.assign({},Vue.plugin,{loading:loading})

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
