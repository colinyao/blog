import Vue from 'vue'
import ConfirmComponent from '../../src/components/confirm/index.vue'
let $vm;
export default{
    install(Vue){
        let Confirm=Vue.extend(ConfirmComponent)
        $vm=new Confirm({
            el:document.createElement('div')
        })
        document.body.appendChild($vm.$el)
        const confirm={
                show: (options) => {
                    let {title,content,shadow=true,onCertain,onCancel,onShow,onHide}=options;
                     $vm.title=title;
                     $vm.content=content;
                     $vm.currentVal=true;
                     $vm.onCertain=onCertain;
                     $vm.onCancel=onCancel;
                     $vm.$watch('currentVal',handleWatch)
                     function handleWatch(newVal){
                         newVal?typeof onShow ==='function'?onShow():'':typeof onHide ==='function'?onHide():''
                     }
                },
                hide: () => {
                    $vm.currentVal = false
                }
            }

            Vue.plugin=Object.assign({},Vue.plugin,{confirm:confirm})

            Vue.mixin({
                created: function() {
                    this.$cele = Vue.plugin
                }
            })
            return $vm
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
