import { render, waitFor, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { beforeEach, describe, expect, it } from 'vitest'
import ProductDetail from './ProductDetail'
import { Provider } from 'react-redux'
import { store } from '../../store'
import { mockProductById } from '../../mocks/handlers'

const mockedProduct = mockProductById('1')

describe('ProductDetail', () => {
  it('should render the component without errors', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProductDetail />
        </MemoryRouter>
      </Provider>
    )
  })

  describe('All available data should be displayed after fetching it', () => {
    const productId = '1'
    const route = `/product/${productId}`
    beforeEach(() => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={[route]}>
            <Routes>
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </MemoryRouter>
        </Provider>
      )
    })
    it('should render a heading with the name of the product', async () => {
      await waitFor(() => {
        const headingElement = screen.getByRole('heading', {
          name: /sample product 1/i,
        })

        expect(headingElement).toBeInTheDocument()
      })
    })

    it('should render a paragraph with the product id', async () => {
      await waitFor(() => {
        const productIdElement = screen.getByText(`Product # ${productId}`)
        expect(productIdElement).toBeInTheDocument()
      })
    })

    it('should render ProductRating Component', async () => {
      await waitFor(() => {
        const ProductRatingComponent = screen.getByTestId('product-rating')
        expect(ProductRatingComponent).toBeInTheDocument()
      })
    })

    it('should render ReviewCount Component', async () => {
      await waitFor(() => {
        const ReviewCountComponent = screen.getByTestId('product-rating')
        expect(ReviewCountComponent).toBeInTheDocument()
      })
    })

    it('should render ProductInfo Component', async () => {
      await waitFor(() => {
        const ProductInfoComponent = screen.getByTestId('product-info')
        expect(ProductInfoComponent).toBeInTheDocument()
      })
    })

    it('should render a description heading and the product description', async () => {
      await waitFor(() => {
        const description = screen.getByText('Description:')
        const productDescription = screen.getByText(
          mockedProduct.description as string
        )

        expect(description).toBeInTheDocument()
        expect(productDescription).toBeInTheDocument()
      })
    })

    it('verifies the "Sold by" information', async () => {
      await waitFor(() => {
        const soldByText = screen.getByText('Sold by:')
        const strongElement = screen.getByText(mockedProduct.seller as string)

        expect(soldByText).toBeInTheDocument()
        expect(strongElement).toBeInTheDocument()
      })
    })

    it('should render a "Submit Your Review" button', async () => {
      await waitFor(() => {
        const buttonElement = screen.getByText(/submit your review/i)

        expect(buttonElement).toBeInTheDocument()
      })
    })

    it('should render the RatingModal component', async () => {
      await waitFor(() => {
        const RatingModalComponent = screen.getByTestId('rating-modal')

        expect(RatingModalComponent).toBeInTheDocument()
      })
    })
  })
})
