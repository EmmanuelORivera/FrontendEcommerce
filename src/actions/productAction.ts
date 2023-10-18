import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../utilities/axios'

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