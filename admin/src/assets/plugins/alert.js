import Vue from 'vue'
import AlertComponent from '../../component/cele/Calert/index.vue'
let $vm;
export default {
    install(Vue) {
        let Alert = Vue.extend(AlertComponent)
        console.log($vm)
        $vm = new Alert({
            el: document.createElement('div')
        })
        document.body.appendChild($vm.$el)


        const alert = {
            show: () => {

            },
            hide: () => {
                $vm.currentVal = false
            }
        }

        Vue.alert={
            alert
        }
        
        Vue.mixin({
            created: function() {
                this.$cele = Vue.alert
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
