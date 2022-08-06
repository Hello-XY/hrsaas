import request from '@/utils/request'

/* 获取员工简单列表 */
export const getEmployeesApi = () => {
  return request({
    url: '/sys/user/simple'
  })
}
