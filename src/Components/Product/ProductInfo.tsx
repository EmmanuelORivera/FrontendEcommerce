import { useState } from 'react'
import { IProduct } from '../../interfaces/IProduct'

const ProductInfo = ({ product }: { product: IProduct | null }) => {
  const [quantity, setQuantity] = useState(1)
  const decreaseQuantity = () => {
    setQuantity((prevQty) => prevQty - 1)
  }
  const isIncreaseButtonEnable = () => {
    return quantity < product?.stock!
  }
  const increseQuantity = () => {
    if (isIncreaseButtonEnable()) setQuantity((prevQty) => prevQty + 1)
  }

  return (
    <div data-testid="product-info">
      <p id="product_price">${product?.price}</p>
      <div className="stockCounter d-inline">
        <span
          onClick={decreaseQuantity}
          className={`btn btn-danger minus`}
          role="button"
        >
          -
        </span>

        <input
          data-testid="quantity-input"
          type="number"
          className="form-control count d-inline"
          value={quantity}
          readOnly
        />

        <span
          onClick={increseQuantity}
          className={`btn ${
            isIncreaseButtonEnable() ? 'btn-primary' : 'disabled'
          } plus`}
          role="button"
        >
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
