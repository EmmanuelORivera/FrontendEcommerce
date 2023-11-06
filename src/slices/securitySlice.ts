import { createSlice } from '@reduxjs/toolkit'
import {
  loadUser,
  login,
  register,
  update,
  updatePassword,
} from '../actions/userAction'
import { saveAddressInfo } from '../actions/cartAction'

interface SecurityState {
  loading: boolean
  errors: Array<any> // Allows for elements of any type
  isAuthenticated: boolean
  user: null
  isUpdated: boolean
  shippingAddress: null | string
}
const initialState: SecurityState = {
  loading: false,
  errors: [],
  isAuthenticated: false,
  user: null,
  isUpdated: false,
  shippingAddress: null,
}

export const securitySlice = createSlice({
  name: 'security',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token')

      state = { ...initialState }
    },

    resetUpdateStatus: (state) => {
      state.isUpdated = false
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true
      state.errors = []
    }),
      builder.addCase(login.fulfilled, (state, action) => {
        state.loading = false
        state.errors = []
        state.user = action.payload
        state.isAuthenticated = true
        state.shippingAddress = action.payload.shippingAddress
      }),
      builder.addCase(login.rejected, (state, action) => {
        state.loading = false
        state.errors = action.payload as []
        state.isAuthenticated = false
        state.user = null
      }),
      builder.addCase(register.pending, (state) => {
        state.loading = true
        state.errors = []
      }),
      builder.addCase(register.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.errors = []
        state.isAuthenticated = true
      }),
      builder.addCase(register.rejected, (state, action) => {
        state.loading = false
        state.errors = action.payload as []
        state.isAuthenticated = false
        state.user = null
      }),
      builder.addCase(update.pending, (state) => {
        state.loading = true
        state.errors = []
      }),
      builder.addCase(update.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.errors = []
        state.isAuthenticated = true
        state.isUpdated = true
      }),
      builder.addCase(update.rejected, (state, action) => {
        state.loading = false
        state.errors = action.payload as []
        state.isAuthenticated = false
        state.user = null
      }),
      builder.addCase(updatePassword.pending, (state) => {
        state.loading = true
        state.errors = []
      }),
      builder.addCase(updatePassword.fulfilled, (state) => {
        state.loading = false
        state.isUpdated = true
      }),
      builder.addCase(updatePassword.rejected, (state, action) => {
        state.loading = false
        state.errors = action.payload as []
        state.isAuthenticated = false
        state.user = null
      }),
      builder.addCase(loadUser.pending, (state) => {
        state.loading = true
        state.errors = []
      }),
      builder.addCase(loadUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.errors = []
        state.shippingAddress = action.payload.shippingAddress
      }),
      builder.addCase(loadUser.rejected, (state, action) => {
        state.loading = false
        state.errors = action.payload as []
        state.isAuthenticated = false
        state.user = null
      }),
      builder.addCase(saveAddressInfo.pending, (state) => {
        state.loading = true
        state.errors = []
      }),
      builder.addCase(saveAddressInfo.fulfilled, (state, action) => {
        state.loading = false
        state.isUpdated = true
        state.errors = []
        state.shippingAddress = action.payload
      }),
      builder.addCase(saveAddressInfo.rejected, (state, action) => {
        state.loading = false
        state.errors = action.payload as []
        state.isAuthenticated = false
        state.user = null
      })
  },
})

export const { logout, resetUpdateStatus } = securitySlice.actions

export const securityReducer = securitySlice.reducer
