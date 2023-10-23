import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import MetaData from './Layout/MetaData'
import { getProducts } from '../actions/productsAction'
import { toast } from 'react-toastify'
import Products from './Products/Products'

const Home = () => {
  const dispatch = useAppDispatch()
  const { products, loading, error } = useAppSelector((state) => state.products)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  if (error !== null) {
    toast.error(error)
  }

  return (
    <>
      <MetaData title="The best products online" />
      <section data-testid="home" id="products" className="container mt-5">
        <Products products={products} col={4} loading={loading} />
      </section>
    </>
  )
}

export default Home
