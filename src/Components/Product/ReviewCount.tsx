import { IProduct } from '../../interfaces/IProduct'

const ReviewCount = ({ product }: { product: IProduct | null }) => {
  return (
    <span data-testid="review-count" id="no_of_reviews">
      ({product?.reviewsQuantity}{' '}
      {product?.reviewsQuantity === 1 ? 'Review' : 'Reviews'})
    </span>
  )
}

export default ReviewCount
