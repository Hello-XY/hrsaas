import PageTools from '@/components/PageTools'
import MyTest from '@/components/MyTest'
const components = [PageTools, MyTest]
export default {
  install(Vue) {
    components.forEach((component) => {
      Vue.component(component.name, component)
    })
  }
}
