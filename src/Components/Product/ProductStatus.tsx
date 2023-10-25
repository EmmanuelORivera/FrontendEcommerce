import { IProduct } from '../../interfaces/IProduct'

const ProductStatus = ({ product }: { product: IProduct | null }) => {
  return (
    <p>
      Status:
      <span
        id="stock_status"
        data-testid="stock_status"
        className={product?.stock! > 0 ? 'greenColor' : 'redColor'}
      >
        {product?.stock! > 0 ? 'In Stock' : 'Out of Stock'}
      </span>
    </p>
  )
}

export default ProductStatus
