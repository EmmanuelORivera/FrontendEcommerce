import { createSlice } from '@reduxjs/toolkit'
import { getProducts } from '../actions/productAction'
import { IProduct } from '../interfaces/IProduct'

interface ProductState {
  products: IProduct[]
  loading: boolean
  error: null | string
}

export const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true
      state.error = null
    }),
      builder.addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
        state.error = null
      }),
      builder.addCase(getProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message!
      })
  },
})

export const productReducer = productSlice.reducer
