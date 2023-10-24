import { describe, it, expect } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Product, { default_image } from './Product'
import { IProduct, ProductStatus } from '../../interfaces/IProduct'
import { MemoryRouter } from 'react-router-dom'

describe('Product', () => {
  let fakeProduct: IProduct = {
    id: 1,
    name: 'Sample Product',
    description: 'a test description',
    price: 49.99,
    rating: 4.5,
    seller: 'Sample Seller',
    stock: 50,
    reviews: [
      {
        id: 1,
        name: 'Jane Doe',
        productId: 1,
        comment: 'Great product!',
        rating: 5,
      },
      {
        id: 2,
        name: 'Jane Doe',
        productId: 1,
        comment: 'Great product!',
        rating: 4,
      },
    ],
    images: [
      {
        id: 1,
        url: 'sample-image-1.jpg',
        productId: 1,
        publicCode: null,
      },
      {
        id: 2,
        url: 'sample-image-2.jpg',
        productId: 1,
        publicCode: null,
      },
    ],
    categoryId: 1,
    categoryName: 'Electronics',
    reviewsQuantity: 2,
    status: ProductStatus.Active,
    statusLabel: 'Active',
  }

  it('should render a view detail button', () => {
    render(
      <MemoryRouter>
        <Product col={4} product={fakeProduct} />
      </MemoryRouter>
    )
    const viewDetailButton = screen.getByRole('link', { name: /details/i })
    expect(viewDetailButton).toBeInTheDocument()
  })

  it('details link should redirect to the route of that product', async () => {
    render(
      <MemoryRouter>
        <Product col={4} product={fakeProduct} />
      </MemoryRouter>
    )

    const viewDetailButton = screen.getByRole('link', { name: /details/i })

    expect(viewDetailButton).toHaveAttribute(
      'href',
      `/product/${fakeProduct.id}`
    )
  })

  it('should render correct price', () => {
    render(
      <MemoryRouter>
        <Product col={4} product={fakeProduct} />
      </MemoryRouter>
    )
    const priceElement = screen.getByText(`$${fakeProduct.price}`)
    expect(priceElement).toBeInTheDocument()
  })

  it('should render the number of reviews', () => {
    render(
      <MemoryRouter>
        <Product col={4} product={fakeProduct} />
      </MemoryRouter>
    )
    const ratingElement = screen.getByText(
      `(${fakeProduct.reviewsQuantity} Reviews)`
    )
    expect(ratingElement).toBeInTheDocument()
  })

  it('should render a product title with the correct text', () => {
    render(
      <MemoryRouter>
        <Product col={4} product={fakeProduct} />
      </MemoryRouter>
    )
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toBeInTheDocument()
    expect(headingElement.textContent).toBe(`${fakeProduct.name}`)
  })

  it('should render a product image', () => {
    render(
      <MemoryRouter>
        <Product col={4} product={fakeProduct} />
      </MemoryRouter>
    )
    const imageElement = screen.getByRole('img')
    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveAttribute('src', fakeProduct.images![0].url)
  })

  it('should render a default image when there is no images', () => {
    const fakeProductWithoutImage: IProduct = { ...fakeProduct, images: [] }

    render(
      <MemoryRouter>
        <Product col={4} product={fakeProductWithoutImage} />
      </MemoryRouter>
    )

    const imageElement = screen.getByRole('img')

    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveAttribute('src', default_image)
  })
})
