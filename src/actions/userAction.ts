import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../utilities/axios'
import { AxiosRequestConfig } from 'axios'

export const login = createAsyncThunk(
  'user/login',
  async (params, { rejectWithValue }) => {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const { data } = await axios.post('/api/v1/login', params, requestConfig)

      localStorage.setItem('token', data.token)

      return data
    } catch (err) {
      return rejectWithValue(err.response.data.message)
    }
  }
)

export const register = createAsyncThunk(
  'user/register',
  async (params, { rejectWithValue }) => {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post(
        '/api/v1/user/register',
        params,
        requestConfig
      )

      localStorage.setItem('token', data.token)

      return data
    } catch (err) {
      return rejectWithValue(err.response.data.message)
    }
  }
)

export const update = createAsyncThunk(
  'user/update',
  async (params, { rejectWithValue }) => {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.put(
        '/api/v1/user/update',
        params,
        requestConfig
      )

      localStorage.setItem('token', data.token)

      return data
    } catch (err) {
      return rejectWithValue(err.response.data.message)
    }
  }
)
