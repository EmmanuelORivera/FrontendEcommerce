export interface IShoppingCartItem {
  id: number
  productId: number
  product?: string | null
  price: number
  quantity: number
  category?: string | null
  stock: number
  totalLine: number
}
