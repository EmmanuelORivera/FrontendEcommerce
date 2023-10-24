import { IReview } from './IReview'

export interface IProduct {
  id: number
  name: string | null
  description: string | null
  price: number
  rating: number
  seller: string | null
  stock: number
  reviews: IReview[] | null
  images: IImage[] | null
  categoryId: number
  categoryName: string | null
  reviewsQuantity: number
  status: ProductStatus
  statusLabel: string
}

export enum ProductStatus {
  Active,
  Inactive,
}
