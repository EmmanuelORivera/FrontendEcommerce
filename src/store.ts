import { configureStore } from '@reduxjs/toolkit'
import { productReducer } from './slices/productsSlice'
import { productByIdReducer } from './slices/productByIdSlice'
import { productPaginationReducer } from './slices/productPaginationSlice'

export const store = configureStore({
  reducer: {
    products: productReducer,
    product: productByIdReducer,
    productPagination: productPaginationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
