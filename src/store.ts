import { configureStore } from '@reduxjs/toolkit'
import { productReducer } from './slices/productsSlice'
import { productByIdReducer } from './slices/productByIdSlice'
import { productPaginationReducer } from './slices/productPaginationSlice'
import { categoryReducer } from './slices/categorySlice'
import { securityReducer } from './slices/securitySlice'

export const store = configureStore({
  reducer: {
    products: productReducer,
    product: productByIdReducer,
    productPagination: productPaginationReducer,
    category: categoryReducer,
    security: securityReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
