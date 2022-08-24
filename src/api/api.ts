import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import queryString from 'query-string'
import { useDispatch } from 'react-redux'
import { storage } from '../helpers'
import { authActions } from '../reduxStore/slices/auth'

const api = axios.create({
  baseURL: 'http://192.168.1.17:8500',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json', 
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
  },
  paramsSerializer: params => queryString.stringify(params),
})

api.interceptors.request.use(async (config: AxiosRequestConfig) => {
  try {
    const token = await storage.get('token')
    token && config.headers && (config.headers['Authorization'] = `Bearer ${token.data}`)
  } catch (error) { }
  return config
})

api.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    return  response.data || response
  },
  err => {
    if (err.status == 401) {
      const dispatch = useDispatch()
      dispatch(authActions.logout())
      storage.clear()
      throw 'Login session expired'
    } else {
      throw err.message
    }
  }
)

export default api