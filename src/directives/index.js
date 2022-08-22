import store from '@/store/index'
export const imgError = {
  inserted: (el, { value }) => {
    if (!el.src) {
      el.src = value
    } else {
      el.onerror = () => {
        el.src = value
      }
    }
  },
  update(el, { value }) {
    if (!el.src) {
      el.src = value
    }
  }
}

export const ishas = {
  inserted(el, binding) {
    console.log(el, binding)
    const has = store.state.permission.points.includes(binding.value)
    if (!has) {
      el.remove()
    }
  }
}
