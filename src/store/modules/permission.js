import router, { asyncRoutes, constantRoutes } from '@/router'

export default {
  namespaced: true,
  state: {
    routes: [],
    prints: []
  },
  mutations: {
    setRoutes(state, routes) {
      state.routes = [...constantRoutes, ...routes]
    },
    setPints(state, points) {
      state.prints = points
    }
  },
  actions: {
    filterRoutes(context, roles) {
      const routes = asyncRoutes.filter((item) => {
        return roles.menus.includes(item.meta.id)
      })
      context.commit('setRoutes', routes)
      router.addRoutes([
        ...routes,
        { path: '*', redirect: '/404', hidden: true }
      ])
    },
    setPints(context, points) {
      context.commit('setPints', points)
    }
  }
}
