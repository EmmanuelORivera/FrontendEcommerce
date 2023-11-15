import { useState } from 'react'
import { IProduct } from '../../interfaces/IProduct'

const ProductInfo = ({ product }: { product: IProduct | null }) => {
  const ONE_PRODUCT = 1
  const [productQuantity, setProductQuantity] = useState(ONE_PRODUCT)
  const isIncreaseButtonEnable = () => {
    return productQuantity < product?.stock!
  }

  const isDecreaseButtonEnable = () => {
    return productQuantity > ONE_PRODUCT
  }

  const increseQuantity = () => {
    if (isIncreaseButtonEnable()) setProductQuantity((prevQty) => prevQty + 1)
  }

  const decreaseQuantity = () => {
    if (isDecreaseButtonEnable()) setProductQuantity((prevQty) => prevQty - 1)
  }

  return (
    <div data-testid="product-info">
      <p id="product_price">${product?.price}</p>
      <div className="stockCounter d-inline">
        <span
          onClick={decreaseQuantity}
          className={`btn ${
            isDecreaseButtonEnable() ? 'btn-danger' : 'disabled'
          }  minus`}
          role="button"
        >
          -
        </span>

        <input
          data-testid="quantity-input"
          type="number"
          className="form-control count d-inline"
          value={productQuantity}
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
