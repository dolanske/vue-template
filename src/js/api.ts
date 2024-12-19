import { eru } from '@dolanske/eru'
import { apiUrl } from '../config'

const api = eru(apiUrl)
export const route = api.route('/')
