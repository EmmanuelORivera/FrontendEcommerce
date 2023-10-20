import { Link } from 'react-router-dom'
import { IProduct } from '../../interfaces/IProduct'

interface ProductProps {
  product: IProduct
  col: number
}
const Product = ({ product, col }: ProductProps) => {
  const default_image = './images/default_product.png'
  return (
    <div className={`col-sm-12 col-md-6 col-lg-${col} my-3`}>
      <div className="card p-3 rounded">
        <img
          className="card-img-top mx-auto"
          src={
            product.images && product.images.length > 0
              ? product.images[0].url!
              : default_image
          }
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <Link>{product.name}</Link>
          </h5>
          <div className="ratings mt-auto">
            <div className="rating-outer">
              <div
                className="rating-inner"
                style={{ width: `${(product.rating / 5) * 100}%` }}
              ></div>
            </div>
            <span id="no_of_reviews">({product.reviewsQuantity} Reviews)</span>
          </div>
          <p className="card-text">${product.price}</p>
          <Link id="view_btn" className="btn btn-block">
            Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Product
