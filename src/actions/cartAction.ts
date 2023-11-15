import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosRequestConfig } from 'axios'
import axios from '../utilities/axios'
import { IShoppingCartItem } from '../interfaces/IShoppingCartItem'

const EMPTY_GUID = '00000000-0000-0000-0000-000000000000'
const ITEM_NOT_FOUND = -1

interface AddItemShoppingCartParams {
  shoppingCartItems: IShoppingCartItem[]
  item: IShoppingCartItem
  productQuantity: number
  shoppingCartId: number
}
export const addItemShoppingCart = createAsyncThunk(
  'shoppingCart/update',
  async (
    {
      shoppingCartId,
      item,
      productQuantity,
      shoppingCartItems,
    }: AddItemShoppingCartParams,
    { rejectWithValue }
  ) => {
    try {
      const updatedItems = [...shoppingCartItems]

      const existingIndex = updatedItems.findIndex(
        (i) => i.productId === item.productId
      )

      if (existingIndex === ITEM_NOT_FOUND) {
        updatedItems.push({ ...item, quantity: productQuantity })
      } else {
        updatedItems[existingIndex].quantity += productQuantity
      }

      let request = {
        shoppingCartItems: updatedItems,
      }

      const requestConfig: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const { data } = await axios.put(
        `/api/v1/ShoppingCart/${shoppingCartId}`,
        request,
        requestConfig
      )

      return data
    } catch (err) {
      return rejectWithValue(err.response.data.message)
    }
  }
)

export const getShoppingCart = createAsyncThunk(
  'shoppingCart/GetById',
  async (params, { rejectWithValue }) => {
    try {
      const shoppingCartId =
        localStorage.getItem('shoppingCartId') ?? EMPTY_GUID

      const { data } = await axios.get(`/api/v1/ShoppingCart/${shoppingCartId}`)

      return data
    } catch (err) {
      return rejectWithValue(err.response.data.message)
    }
  }
)

export const removeItemShoppingCart = createAsyncThunk(
  'shoppingCart/removeItem',
  async (params: { id: number }, { rejectWithValue }) => {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const { data } = await axios.delete(
        `/api/v1/ShoppingCart/item/${params.id}`,
        requestConfig
      )

      return data
    } catch (error) {
      return rejectWithValue(err.response.data.message)
    }
  }
)
export const saveAddressInfo = createAsyncThunk(
  'shoppingCart/saveAddressInfo',
  async (params, { rejectWithValue }) => {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const { data } = await axios.post(
        '/api/v1/order/address',
        params,
        requestConfig
      )

      return data
    } catch (err) {
      return rejectWithValue(err.response.data.message)
    }
  }
)
