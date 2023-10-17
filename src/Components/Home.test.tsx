import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Home from './Home'

describe('Home', () => {
  it('should render component without a problem', () => {
    render(<Home />)
  })

  it('should render a product image', () => {
    render(<Home />)

    const imageElement = screen.getByRole('img')
    expect(imageElement).toBeInTheDocument()
  })

  it('should render a product title with the correct text', () => {
    render(<Home />)

    const headingElement = screen.getByRole('heading')
    expect(headingElement).toBeInTheDocument()
    expect(headingElement.textContent).toBe(
      '128GB Solid Storage Memory card - SanDisk Ultra'
    )
  })

  it('should render the number of reviews', () => {
    render(<Home />)

    const ratingElement = screen.getByText('(5 Reviews)')
    expect(ratingElement).toBeInTheDocument()
  })

  it('should render price element', () => {
    render(<Home />)

    const priceElement = screen.getByText('$45.67')
    expect(priceElement).toBeInTheDocument()
  })

  it('should render a view detail button', () => {
    render(<Home />)

    const viewDetailButton = screen.getByRole('link', { name: /Details/i })
    expect(viewDetailButton).toBeInTheDocument()
  })
})
