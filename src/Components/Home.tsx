import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import MetaData from './Layout/MetaData'
import { getProductPagination } from '../actions/productsAction'
import { toast } from 'react-toastify'
import Products from './Products/Products'
import Pagination from 'react-js-pagination'
import {
  setPageIndex,
  updateCategory,
  updatePrice,
  updateRating,
} from '../slices/productPaginationSlice'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { ICategory } from '../interfaces/ICategory'

const { createSliderWithTooltip } = Slider
const Range = createSliderWithTooltip(Slider.Range)

const Home = () => {
  const [price, setPrice] = useState([1, 10000])

  const dispatch = useAppDispatch()

  const { categories } = useAppSelector((state) => state.category)

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

  const onChangePrice = (priceEvent: number[]) => {
    setPrice(priceEvent as number[])
  }

  const onAfterChange = (priceEvent: number[]) => {
    dispatch(updatePrice({ price: priceEvent }))
  }

  const onChangeCategory = (category: ICategory) => {
    dispatch(updateCategory({ category: category.id }))
  }

  const onChangeStar = (star: number) => {
    dispatch(updateRating({ rating: star }))
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
        {search ? (
          <div className="row">
            <div className="col-6 col-md-3 my-5">
              <div className="px-5">
                <Range
                  marks={{ 1: `$1`, 10000: `$10000` }}
                  min={1}
                  max={10000}
                  defaultValue={[1, 10000]}
                  tipFormatter={(value) => `$${value}`}
                  value={price}
                  tipProps={{ placement: 'top', visible: true }}
                  onChange={onChangePrice}
                  onAfterChange={onAfterChange}
                />
              </div>

              <hr className="my-5" />

              <div className="mt-5">
                <h4 className="mb-3">Categories</h4>
                <ul className="pl-0">
                  {categories.map((category) => (
                    <li
                      key={category.id}
                      style={{ cursor: 'pointer', listStyle: 'none' }}
                      onClick={() => onChangeCategory(category)}
                    >
                      {category.name}
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="my-5" />

              <div className="mt-5">
                <h4 className="mb-3">Ratings</h4>

                <ul className="pl-0">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <li
                      key={star}
                      onClick={() => onChangeStar(star)}
                      style={{
                        cursor: 'pointer',
                        listStyleType: 'none',
                      }}
                    >
                      <div className="rating-outer">
                        <div
                          className="rating-inner"
                          style={{ width: `${star * 20}%` }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-9">
              <Products products={products} col={4} loading={loading} />
            </div>
          </div>
        ) : (
          <Products products={products} col={4} loading={loading} />
        )}
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
