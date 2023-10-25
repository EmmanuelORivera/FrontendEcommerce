import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ProductStatus from './ProductStatus'
import { mockProductById } from '../../mocks/handlers'

const product = mockProductById('1')

describe('ProductStatus', () => {
  it('should render the component correctly', () => {
    render(<ProductStatus product={product} />)
  })

  it('verifies the content and styling of product status', () => {
    render(<ProductStatus product={product} />)

    const statusElement = screen.getByText('Status:')
    const statusSpan = screen.getByTestId('stock_status')

    expect(statusElement).toBeInTheDocument()

    if (product.stock > 0) {
      expect(statusSpan).toHaveTextContent('In Stock')
      expect(statusSpan).toHaveClass('greenColor')
    } else {
      expect(statusSpan).toHaveTextContent('Out of Stock')
      expect(statusSpan).toHaveClass('redColor')
    }
  })
})
