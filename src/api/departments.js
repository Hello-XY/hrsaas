import request from '@/utils/request'

export const getDeptsApi = () => {
  return request({
    url: '/company/department'
  })
}

export const delDeptsApi = (id) => {
  return request({
    url: `/company/department/${id}`,
    method: 'DELETE'
  })
}

/**
 * 添加部门
 * @param {*} data
 * @returns promise
 */
export function addDepartment(data) {
  return request({
    url: '/company/department',
    method: 'POST',
    data
  })
}
