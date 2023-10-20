import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import MetaData from './Layout/MetaData'
import { getProducts } from '../actions/productAction'
import Product from './Product/Product'

const Home = () => {
  const dispatch = useAppDispatch()
  const { products } = useAppSelector((state) => state.products)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <>
      <MetaData title="The best products online" />
      <section data-testid="home" id="products" className="container mt-5">
        <div className="row">
          {products
            ? products.map((product) => (
                <Product key={product.id} col={4} product={product} />
              ))
            : 'There is no products'}
        </div>
      </section>
    </>
  )
}

export default Home
