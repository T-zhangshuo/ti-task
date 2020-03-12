import axios from 'axios'
import { Loading, Message } from 'element-ui'
import router from '@/router'

let loadingInstance = null

const instance = axios.create({
  timeout: 10000,
  baseURL: process.env.NODE_ENV === 'production' ? '' : '/api'
})
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

/** 添加请求拦截器 **/
instance.interceptors.request.use(config => {
  config.headers.token = sessionStorage.getItem('token') || ''
  loadingInstance = Loading.service({
    spinner: 'fa fa-spinner fa-spin fa-3x fa-fw',
    text: '拼命加载中...'
  })
  return config
}, error => {
  return Promise.reject(error)
})

/** 添加响应拦截器  **/
instance.interceptors.response.use(response => {
  loadingInstance.close()
  if (response.data.opt) {
    return Promise.resolve(response.data.data)
  } else {
    Message({
      message: response.data.msg,
      type: 'error'
    })
    if (response.data.optCode === '10001') {
      router.push({
        path: '/login'
      })
    }
    return Promise.reject(response.data.message)
  }
}, error => {
  loadingInstance.close()
  if (error.response) {
    Message({
      message: '哎呀, 无法访问啦～',
      type: 'error'
    })
    return Promise.reject(error)
  } else {
    Message({
      message: '哎呀, 现在太拥挤啦～',
      type: 'error'
    })
    return Promise.reject(new Error('请求超时, 请刷新重试'))
  }
})

/* 统一封装get请求 */
export const get = (url, params, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'get',
      url,
      params,
      ...config
    }).then(response => {
      resolve(response)
    }).catch(error => {
    })
  })
}

/* 统一封装post请求  */
export const post = (url, data, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'post',
      url,
      data,
      ...config
    }).then(response => {
      resolve(response)
    }).catch(error => {
    })
  })
}
