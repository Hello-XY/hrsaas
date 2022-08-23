import PageTools from '@/components/PageTools'
import MyTest from '@/components/MyTest'
import UploadExcel from '@/components/UploadExcel'
import UploadImg from '@/components/UploadImg'
import Calendar from '@/views/dashboard/components/work-calendar.vue'
import SvgIcon from '@/components/SvgIcon'
import FullScreen from '@/components/FullScreen'
import ToogleLang from '@/components/ToogleLang'
const components = [
  PageTools,
  MyTest,
  UploadExcel,
  UploadImg,
  Calendar,
  SvgIcon,
  FullScreen,
  ToogleLang
]
export default {
  install(Vue) {
    components.forEach((component) => {
      Vue.component(component.name, component)
    })
  }
}
