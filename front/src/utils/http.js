import axios from 'axios'

axios.defaults.timeout = 5000;

// http request 拦截器
axios.interceptors.request.use(
    config => {
        config.headers = {
            'Content-Type':'application/x-www-form-urlencoded'
        }
      const token = sessionStorage.getItem('token')
      if (token ) { // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.authorization = 'Bearer ' + token  //请求头加上token
      }
      return config
    },
    err => {
      return Promise.reject(err)
    })

    axios.interceptors.response.use(
        response => {
            return response
  },
  //接口错误状态处理，也就是说无响应时的处理
  error => {
    return Promise.reject(error.response.status) // 返回接口返回的错误信息
  })

export const http = async (method, url, params) => {
    return new Promise((resolve, reject) => {
        
        method === 'post' ? axios.post(url, params).then (data => {
            resolve(data)
        }).catch(e => {
            reject(e)
        }) : axios.get(url, {
            params: params
        }).then (data => {
            resolve(data)
        }).catch(e => {
            reject(e)
        })
    })
}