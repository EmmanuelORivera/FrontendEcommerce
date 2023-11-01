import { createSlice } from '@reduxjs/toolkit'
import { getCategories } from '../actions/categoryAction'
import { ICategory } from '../interfaces/ICategory'

interface CategoryState {
  categories: ICategory[]
  loading: boolean
  error: null | string
}
export const initialState: CategoryState = {
  categories: [],
  loading: false,
  error: null,
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true
      state.error = null
    }),
      builder.addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false
        state.categories = action.payload
        state.error = null
      }),
      builder.addCase(getCategories.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const categoryReducer = categorySlice.reducer
