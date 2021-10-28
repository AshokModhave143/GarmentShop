import { GeneralApiProblem } from '../common/api-problem'

export type LoginResult = { kind: 'ok'; data: any } | GeneralApiProblem
