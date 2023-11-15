import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ProductInfo from './ProductInfo'
import { mockProductById } from '../../mocks/handlers'

const product = mockProductById('1')

describe('ProductInfo', () => {
  it('should render the component correctly', () => {
    render(<ProductInfo product={product} />)
  })

  it('should render the correct product price', () => {
    render(<ProductInfo product={product} />)
    const priceElement = screen.getByText(`$${product.price}`)

    expect(priceElement).toBeInTheDocument()
  })

  it('should render a span with - as button', () => {
    render(<ProductInfo product={product} />)

    const minusButton = screen.getByText('-')
    expect(minusButton).toBeInTheDocument()
    expect(minusButton).toHaveAttribute('role', 'button')
  })

  it('should render a span with + as button', () => {
    render(<ProductInfo product={product} />)

    const plusButton = screen.getByText('+')
    expect(plusButton).toBeInTheDocument()
    expect(plusButton).toHaveAttribute('role', 'button')
  })

  it('should render a input with the correct attributes', () => {
    render(<ProductInfo product={product} />)

    const inputElement = screen.getByTestId('quantity-input')
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveAttribute('type', 'number')
    expect(inputElement).toHaveAttribute('value', '1')
    expect(inputElement).toHaveAttribute('readOnly')
  })

  it('should render an Add to Cart button', () => {
    render(<ProductInfo product={product} />)

    const buttonElement = screen.getByText(/add to cart/i)

    expect(buttonElement).toBeInTheDocument()
  })

  it('should increase and decrease correctly', () => {
    render(<ProductInfo product={product} />)

    const increaseButton = screen.getByText('+')
    const decreaseButton = screen.getByText('-')
    const quantity = screen.getByTestId('quantity-input')

    for (let i = 0; i < 10; i++) {
      fireEvent.click(increaseButton)
    }

    fireEvent.click(decreaseButton)

    expect(quantity).toHaveAttribute('value', '10')
  })

  it('should disable increase button when quantity input has the stock limit value and disable the button', () => {
    render(<ProductInfo product={product} />)

    const increaseButton = screen.getByText('+')
    const quantity = screen.getByTestId('quantity-input')

    fireEvent.click(increaseButton)
    expect(quantity).toHaveAttribute('value', '2')
    expect(increaseButton).toHaveClass('btn-primary')

    for (let i = 0; i <= product.stock; i++) {
      fireEvent.click(increaseButton)
    }

    expect(quantity).toHaveAttribute('value', String(product.stock))
    expect(increaseButton).toHaveClass('disabled')
  })
})
