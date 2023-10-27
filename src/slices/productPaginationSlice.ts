import { createSlice } from '@reduxjs/toolkit'
import { getProductPagination } from '../actions/productsAction'
import { IProduct } from '../interfaces/IProduct'

interface ProductPaginationState {
  products: IProduct[]
  count: number
  pageIndex: number
  pageSize: number
  pageCount: number
  loading: boolean
  resultByPage: number
  error: string | null
  search: string | null
  maxPrice: number | null
  minPrice: number | null
  category: string | null
  rating: number | null
}
export const initialState: ProductPaginationState = {
  products: [],
  count: 0,
  pageIndex: 1,
  pageSize: 10,
  pageCount: 0,
  loading: false,
  resultByPage: 0,
  error: null,
  search: null,
  maxPrice: null,
  minPrice: null,
  category: null,
  rating: null,
}

export const productPaginationSlice = createSlice({
  name: 'getProductPagination',
  initialState,
  reducers: {
    searchPagination: (state, action) => {
      state.search = action.payload.search
      state.pageIndex = 1
    },
    setPageIndex: (state, action) => {
      state.pageIndex = action.payload.pageIndex
    },
    updatePrice: (state, action) => {
      state.maxPrice = action.payload.price[1]
      state.minPrice = action.payload.price[0]
    },
    updateCategory: (state, action) => {
      state.category = action.payload.category
    },
    updateRating: (state, action) => {
      state.rating = action.payload.rating
    },
    resetPagination: (state) => {
      state.maxPrice = null
      state.minPrice = null
      state.pageIndex = 1
      state.search = null
      state.category = null
      state.rating = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductPagination.pending, (state) => {
      state.loading = true
      state.error = null
    }),
      builder.addCase(getProductPagination.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload.data
        state.count = action.payload.count
        state.pageIndex = action.payload.pageIndex
        state.pageSize = action.payload.pageSize
        state.pageCount = action.payload.pageCount
        state.resultByPage = action.payload.resultByPage
        state.error = null
      }),
      builder.addCase(getProductPagination.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const {
  searchPagination,
  setPageIndex,
  updatePrice,
  resetPagination,
  updateCategory,
  updateRating,
} = productPaginationSlice.actions

export const productPaginationReducer = productPaginationSlice.reducer
