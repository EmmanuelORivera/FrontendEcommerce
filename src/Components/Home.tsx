import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import MetaData from './Layout/MetaData'
import { getProductPagination } from '../actions/productsAction'
import { toast } from 'react-toastify'
import Products from './Products/Products'
import Pagination from 'react-js-pagination'
import { setPageIndex } from '../slices/productPaginationSlice'

const Home = () => {
  const dispatch = useAppDispatch()
  const {
    products,
    count,
    pageIndex,
    loading,
    error,
    resultByPage,
    search,
    pageSize,
    maxPrice,
    minPrice,
    category,
    rating,
  } = useAppSelector((state) => state.productPagination)

  const setCurrentPageNumber = (pageNumber: number) => {
    dispatch(setPageIndex({ pageIndex: pageNumber }))
  }

  useEffect(() => {
    dispatch(
      getProductPagination({
        pageIndex,
        pageSize,
        search,
        maxPrice,
        minPrice,
        categoryId: category,
        rating,
      })
    )
  }, [
    dispatch,
    error,
    search,
    pageSize,
    pageIndex,
    maxPrice,
    minPrice,
    category,
    rating,
  ])

  if (error !== null) {
    toast.error(error)
  }

  return (
    <>
      <MetaData title="The best products online" />
      <section data-testid="home" id="products" className="container mt-5">
        <Products products={products} col={4} loading={loading} />
      </section>

      <div className="d-flex justify-content-center mt-5">
        <Pagination
          activePage={pageIndex}
          itemsCountPerPage={pageSize}
          totalItemsCount={count}
          onChange={setCurrentPageNumber}
          nextPageText={'>'}
          prevPageText={'<'}
          firstPageText={'<<'}
          lastPageText={'>>'}
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
    </>
  )
}

export default Home
