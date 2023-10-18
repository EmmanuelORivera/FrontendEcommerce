import { render, screen, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { Provider } from 'react-redux'
import Home from './Home'
import { store } from '../store'

describe('Home', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    )
  })
  it('should render component without a problem', () => {})

  it('should render a product image', () => {
    const imageElement = screen.getByRole('img')
    expect(imageElement).toBeInTheDocument()
  })

  it('should render a product title with the correct text', () => {
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toBeInTheDocument()
    expect(headingElement.textContent).toBe(
      '128GB Solid Storage Memory card - SanDisk Ultra'
    )
  })

  it('should render the number of reviews', () => {
    const ratingElement = screen.getByText('(5 Reviews)')
    expect(ratingElement).toBeInTheDocument()
  })

  it('should render price element', () => {
    const priceElement = screen.getByText('$45.67')
    expect(priceElement).toBeInTheDocument()
  })

  it('should render a view detail button', () => {
    const viewDetailButton = screen.getByRole('link', { name: /Details/i })
    expect(viewDetailButton).toBeInTheDocument()
  })

  it('should render the component with the correct title', async () => {
    const pageTitle = 'The best products online - Ecommerce Amazon'

    await waitFor(() => {
      expect(document.title).toBe(pageTitle)
    })
  })
})
