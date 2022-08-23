import { createSlice } from '@reduxjs/toolkit'

type ISetting = {}

const initialState: ISetting = {}

const slice = createSlice({
  name: 'setting',
  initialState,
  reducers: {},
})

export const settingActions = slice.actions
export const settingReducers = slice.reducer
