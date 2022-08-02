import { login, getUserInfoApi, getUserDetail } from '@/api/user'
export default {
  namespaced: true,
  state: {
    token: '',
    userInfo: {}
  },
  mutations: {
    upDataToken(state, payload) {
      state.token = payload
    },
    setUserInfo(state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    async getToken(context, payload) {
      const res = await login(payload)
      // console.log(res);
      context.commit('upDataToken', res)
    },
    /* 获取用户信息 */
    async getUserInfo(context) {
      const userBaseInfo = await getUserInfoApi()
      const userInfo = await getUserDetail(userBaseInfo.userId)
      context.commit('setUserInfo', { ...userBaseInfo, ...userInfo })
    }
  }
}
