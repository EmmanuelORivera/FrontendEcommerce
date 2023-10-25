import { IProduct } from '../../interfaces/IProduct'

const ProductRating = ({ product }: { product: IProduct | null }) => {
  return (
    <div data-testid="product-rating" className="rating-outer">
      <div
        className="rating-inner"
        style={{ width: `${(product?.rating! / 5) * 100}%` }}
      ></div>
    </div>
  )
}

export default ProductRating
