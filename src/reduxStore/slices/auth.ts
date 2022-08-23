import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { actions } from '.'
import { storage, string } from '../../helpers'

type IState = {
  isLoading: boolean
  token: null | string
  isLoadResource: boolean
  isError: boolean
  info: null | any
}

const initialState: IState = {
  isLoading: true,
  isError: false,
  token: null,
  isLoadResource: false,
  info: null
}

const slice = createSlice({
  name: 'auth',
  initialState,
  
  reducers: {
    restoreToken: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.token = action.payload
    },
    login: (state, action) => {
      state.token = action.payload
      state.isLoadResource = true
      storage.set('token', action.payload)
    },
    logout: state => {
      state.isLoading = false
      state.token = null 
      state.isLoadResource = false
      storage.remove('token')
    },
    infor: (state, action) => {
      state.info = action.payload
    }
  },
})

export const authActions = slice.actions
export const authReducers = slice.reducer
