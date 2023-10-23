import { createSlice } from '@reduxjs/toolkit'
import { getProductById } from '../actions/productsAction'
import { IProduct } from '../interfaces/IProduct'

interface ProductState {
  product: IProduct | null
  loading: boolean
  error: null | string
}
export const initialState: ProductState = {
  product: null,
  loading: false,
  error: null,
}

export const productByIdSlice = createSlice({
  name: 'productByIdSlice',
  initialState,
  reducers: {
    resetGetById: (state, action) => {
      state.loading = false
      state.error = null
      state.product = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductById.pending, (state) => {
      state.loading = true
      state.error = null
    }),
      builder.addCase(getProductById.fulfilled, (state, action) => {
        state.loading = false
        state.product = action.payload
        state.error = null
      }),
      builder.addCase(getProductById.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const { resetGetById } = productByIdSlice.actions
export const productByIdReducer = productByIdSlice.reducer
