import { IReview } from './IReview'

export interface IProduct {
  id: number
  name: string | null
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

enum ProductStatus {
  Active,
  Inactive,
}
