import { createSlice } from '@reduxjs/toolkit'
import { forgotPassword } from '../actions/userAction'

export const initialState = {
  message: null,
  errors: [],
  loading: false,
}

export const forgotPasswordSlice = createSlice({
  name: 'forgotPassword',
  initialState,
  reducers: {
    resetError: () => {
      return initialState
    },
  },
  extraReducers: (builder) => {
    builder.addCase(forgotPassword.pending, (state) => {
      state.message = null
      state.errors = []
      state.loading = true
    }),
      builder.addCase(forgotPassword.fulfilled, (state, action) => {
        state.message = action.payload
        state.errors = []
        state.loading = true
      }),
      builder.addCase(forgotPassword.rejected, (state, action) => {
        state.message = null
        state.errors = action.payload as []
        state.loading = false
      })
  },
})

export const { resetError } = forgotPasswordSlice.actions
export const forgotPasswordReducer = forgotPasswordSlice.reducer
