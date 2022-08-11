import PageTools from '@/components/PageTools'
import MyTest from '@/components/MyTest'
export default {
  install(Vue) {
    Vue.component('PageTools', PageTools), Vue.component('MyTest', MyTest)
  }
}
