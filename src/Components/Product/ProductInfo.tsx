import { IProduct } from '../../interfaces/IProduct'

const ProductInfo = ({ product }: { product: IProduct | null }) => {
  return (
    <div data-testid="product-info">
      <p id="product_price">${product?.price}</p>
      <div className="stockCounter d-inline">
        <span className="btn btn-danger minus" role="button">
          -
        </span>

        <input
          data-testid="quantity-input"
          type="number"
          className="form-control count d-inline"
          value="1"
          readOnly
        />

        <span className="btn btn-primary plus" role="button">
          +
        </span>
      </div>
      <button
        type="button"
        id="cart_btn"
        className="btn btn-primary d-inline ml-4"
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductInfo
