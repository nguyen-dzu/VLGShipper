import { authActions, authReducers } from './auth'
import { loaderActions, loaderReducers } from './loader'
import { menuActions, menuReducers } from './menu'
import { settingActions, settingReducers } from './setting'

export const actions = {
  auth: authActions,
  loader: loaderActions,
  setting: settingActions,
  menu: menuActions
}

export const reducers = {
  auth: authReducers,
  loader: loaderReducers,
  setting: settingReducers,
  menu: menuReducers
}
