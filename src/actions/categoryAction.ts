import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../utilities/axios'

export const getCategories = createAsyncThunk(
  'category/getCategories',
  async (ThunkApi, { rejectWithValue }) => {
    try {
      const response = await axios.get(`api/v1/category/list`)
      return response.data
    } catch (error) {
      return rejectWithValue(`Errors: ${error.message}`)
    }
  }
)
