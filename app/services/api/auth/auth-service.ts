import { ApisauceInstance, create, ApiResponse } from 'apisauce'
import { ApiConfig, DEFAULT_API_CONFIG } from '../api-config'
import { getGeneralApiProblem } from '../common/api-problem'
import * as Types from './auth-service.types'

export const createApi = (config: ApiConfig = DEFAULT_API_CONFIG) => {
  const apiSauce: ApisauceInstance = create({
    baseURL: config.url,
    timeout: config.timeout,
    headers: {
      Accept: 'application/json',
    },
  })

  async function login(username: string, password: string): Promise<Types.LoginResult> {
    const response: ApiResponse<any> = await apiSauce.post('/login', {
      payload: { username, password },
    })

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    try {
      const data = response.data
      return { kind: 'ok', data: data }
    } catch {
      return { kind: 'bad-data' }
    }
  }

  return { login }
}
