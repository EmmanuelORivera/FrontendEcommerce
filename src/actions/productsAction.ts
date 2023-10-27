import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../utilities/axios'
import { removeEmptyProperties } from '../utilities/removeEmptyProperties'

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (ThunkApi, { rejectWithValue }) => {
    try {
      const response = await axios.get(`api/v1/product/list`)
      return response.data
    } catch (error) {
      return rejectWithValue(`Errors: ${error.message}`)
    }
  }
)

export const getProductById = createAsyncThunk(
  'products/getProductId',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`api/v1/product/${id}`)
      return response.data
    } catch (error) {
      return rejectWithValue(`Errors: ${error.message}`)
    }
  }
)

export const getProductPagination = createAsyncThunk(
  'products/getProductPagination',
  async (params: Record<string, any>, { rejectWithValue }) => {
    try {
      const newParams = removeEmptyProperties(params)
      const queryString = new URLSearchParams(newParams).toString()

      const results = await axios.get(
        `api/v1/product/pagination?${queryString}`
      )

      return results.data
    } catch (error) {
      return rejectWithValue(`Errors: ${error.message}`)
    }
  }
)
