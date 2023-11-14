import { createSlice } from '@reduxjs/toolkit'
import { resetPassword } from '../actions/userAction'

export const initialState = {
  message: null,
  errors: [],
  loading: false,
}

export const resetPasswordSlice = createSlice({
  name: 'resetPassword',
  initialState,
  reducers: {
    resetError() {
      return initialState
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetPassword.pending, (state) => {
      state.message = null
      state.errors = []
      state.loading = true
    }),
      builder.addCase(resetPassword.fulfilled, (state, action) => {
        state.message = action.payload
        state.errors = []
        state.loading = false
      }),
      builder.addCase(resetPassword.rejected, (state, action) => {
        state.message = null
        state.errors = action.payload as []
        state.loading = false
      })
  },
})

export const { resetError } = resetPasswordSlice.actions
export const resetPasswordReducer = resetPasswordSlice.reducer
