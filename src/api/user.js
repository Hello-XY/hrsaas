import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

/* 获取用户基本资料 */
export const getUserInfoApi = () => {
  return request({
    method: 'POST',
    url: '/sys/profile'
  })
}

/* 根据用户信息获取头像 */
export const getUserDetail = (id) => {
  return request({
    url: '/sys/user/' + id
  })
}
