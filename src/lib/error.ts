import { AxiosError, AxiosResponse } from 'axios'

export class CustomError {
  name: string
  isHttpError: boolean
  statusCode: number
  url: string
  trxId?: string
  response?: AxiosResponse<unknown>

  constructor(e: AxiosError | Error) {
    this.name = e.name

    if ((e as any).isAxiosError && (e as any).response) {
      const error = e as AxiosError
      const response = error.response as AxiosResponse
      const httpCode = `HTTP ${response.status}`

      this.isHttpError = true
      this.url = error.config.url || ''
      this.statusCode = response.status || 0

      this.trxId = response.headers['x-tid'] || 'undefined'
      this.response = response
    }
  }
}
