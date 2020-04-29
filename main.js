import Vue from 'vue'
import App from './App'
import api from '@/common/vmeitime-http/'
import dialogBar from './components/dialog.vue'

Vue.component('dialog-bar', dialogBar)
Vue.config.productionTip = false
Vue.prototype.$api = api
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
