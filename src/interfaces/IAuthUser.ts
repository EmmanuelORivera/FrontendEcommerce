import { UserRole } from '../types/UserRole'
import { IAddress } from './IAddress'

export interface IAuthUser {
  id: string
  name: string
  lastName: string
  phone: string
  username: string
  email: string
  token: string
  avatar: string
  shippingAddress: IAddress | null
  roles: UserRole[] | null
}
