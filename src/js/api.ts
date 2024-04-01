import { eru } from '@dolanske/eru'
import { API_URL } from '../config'

const api = eru(API_URL)
export const route = api.route('/')
