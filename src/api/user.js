import request from '@/utils/request'
/**
 * 登录请求
 * @param {object} data username and password
 * @returns promise
 */
export const login = (data) => {
    return request({
        method: 'POST',
        url: '/sys/login',
        data
    })
}
