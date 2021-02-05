import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { selector } from 'recoil'
import sessionState from 'state/session'

let instance = axios.create({
  timeout: +process.env.REACT_APP_HTTP_TIMEOUT!,
})

instance.defaults.baseURL =
  process.env.REACT_APP_BASE_DOMAIN! + process.env.REACT_APP_BASE_URL!

instance.interceptors.request.use(
  async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
    if (config.baseURL === instance.defaults.baseURL) {
      const token = selector({
        key: 'sessionState',
        get: ({ get }) => {
          const state = get(sessionState)
          return state.token
        },
      })

      if (token) {
        config.headers['x-token'] = token
      }

      config.headers['cache-control'] = 'no-cache'
    }

    return config
  },
  async (error: Error): Promise<Error> => {
    throw error
  }
)

instance.interceptors.response.use(
  async (response: AxiosResponse<any>): Promise<AxiosResponse<any>> => {
    return response
  },
  async (error: any): Promise<any> => {
    if (isAxiosError(error)) {
    }
  }
)

export const isAxiosError = (error: any): boolean => error.isAxiosError === true

export default instance
