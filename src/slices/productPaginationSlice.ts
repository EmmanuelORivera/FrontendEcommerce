import { createSlice } from '@reduxjs/toolkit'
import { getProductPagination } from '../actions/productsAction'
import { IProduct } from '../interfaces/IProduct'

interface ProductPaginationState {
  products: IProduct[]
  count: Number
  pageIndex: Number
  pageSize: Number
  pageCount: Number
  loading: boolean
  resultByPage: 0
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
    updateRationg: (state, action) => {
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
})
