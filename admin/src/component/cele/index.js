import Calert from './src/components/alert/index.vue'
import Ccheckbox from './src/components/checkbox/index.vue'
import CcheckAllbox from './src/components/checkAllbox/index.vue'
import Cinput from './src/components/input/index.vue'
import Cloading from './src/components/loading/index.vue'
import Cradio from './src/components/radio/index.vue'
import Cselect from './src/components/select/index.vue'
import Ctextarea from './src/components/loading/index.vue'
import Ctoggle from './src/components/toggle/index.vue'
import Range from './src/components/range/index.vue'

import Previewer from './src/components/Previewer/index.vue'
import Cell from './src/components/cell/index.vue'
import CselectM from './src/components_m/Cselect/index.vue'
import AlertPlugin from './assets/plugins/alert.js'
import ConfirmPlugin from './assets/plugins/confirm.js'
import HttpPlugin from './assets/plugins/http.js'
import LoadingPlugin from './assets/plugins/loading.js'
import ToastPlugin from './assets/plugins/toast.js'
import MarkDown from './src/components/MarkDown/index.vue'
import {TabBar,TabBarItem} from './src/components/tabbar'
import {Tab,TabItem} from './src/components/tab'
import Toast  from './src/components/toast'
import ToastM  from './src/components_m/toast'
import ToastMPlugin from './assets/plugins/toast_m.js'
import Modal from './src/components/Modal/index.vue'
import {
    previewerMixin
} from './assets/mixins/index.js'


export{
    Calert,
    Ccheckbox,
    CcheckAllbox,
    Cinput,
    Cloading,
    Cradio,
    Cselect,
    Ctextarea,
    Ctoggle,
    Range,

    Previewer,
    Cell,
    CselectM,
    previewerMixin,
    AlertPlugin,
    ConfirmPlugin,
    HttpPlugin,
    LoadingPlugin,
    TabBar,
    TabBarItem,
    Tab,
    TabItem,
    Toast,
    ToastPlugin,
    ToastM,
    ToastMPlugin,
    Modal,
    MarkDown
}
