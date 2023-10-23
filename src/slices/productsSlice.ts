import { createSlice } from '@reduxjs/toolkit'
import { getProducts } from '../actions/productsAction'
import { IProduct } from '../interfaces/IProduct'

interface ProductsState {
  products: IProduct[]
  loading: boolean
  error: null | string
}

export const initialState: ProductsState = {
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
        state.error = action.payload as string
      })
  },
})

export const productReducer = productSlice.reducer
