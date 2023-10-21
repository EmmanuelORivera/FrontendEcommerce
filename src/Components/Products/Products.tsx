import { IProduct } from '../../interfaces/IProduct'
import Loader from '../Layout/Loader'
import Product from '../Product/Product'

interface ProductsProps {
  products: IProduct[]
  col: number
  loading: boolean
}

const Products = ({ products, col, loading }: ProductsProps) => {
  if (loading) {
    return <Loader />
  }

  return (
    <>
      {products
        ? products.map((product) => (
            <Product key={product.id} col={col} product={product} />
          ))
        : 'There is no products'}
    </>
  )
}

export default Products
