import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { getProductById } from '../../actions/productsAction'
import Loader from '../Layout/Loader'
import { toast } from 'react-toastify'
import { Carousel } from 'react-bootstrap'
import ProductRating from './ProductRating'
import ReviewCount from './ReviewCount'
import ProductInfo from './ProductInfo'
import ProductStatus from './ProductStatus'
import RatingModal from './RatingModal'

const ProductDetail = () => {
  const dispatch = useAppDispatch()
  const { product, loading, error } = useAppSelector((state) => state.product)

  const { id } = useParams()

  useEffect(() => {
    dispatch(getProductById(id as string))
  }, [id])

  if (error !== null) {
    toast.error(error)
  }

  if (loading) {
    return <Loader />
  }

  if (!loading && !product) {
    return <span>There is no product</span>
  }

  return (
    <div className="row f-flex justify-content-around">
      <div className="col-12 col-lg-5 img-fluid" id="product_image">
        <Carousel pause="hover">
          {product?.images?.map((image) => (
            <Carousel.Item key={image.id}>
              <img
                className="d-block w-100"
                src={image.url!}
                alt={product.name!}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="col-12 col-lg-5 mt-5">
        <h3>{product?.name}</h3>
        <p id="product_id">Product # {product?.id}</p>

        <hr />

        <ProductRating product={product} />
        <ReviewCount product={product} />

        <hr />
        <ProductInfo product={product} />
        <hr />
        <ProductStatus product={product} />
        <hr />

        <h4 className="mt-2">Description:</h4>
        <p>{product?.description}</p>
        <hr />
        <p id="product_seller mb-3">
          Sold by: <strong>{product?.seller}</strong>
        </p>

        <button
          id="review_btn"
          type="button"
          className="btn btn-primary mt-4"
          data-toggle="modal"
          data-target="#ratingModal"
        >
          Submit Your Review
        </button>

        <RatingModal />
      </div>
    </div>
  )
}

export default ProductDetail
