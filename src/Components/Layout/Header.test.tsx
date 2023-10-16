import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Header from './Header'

describe('Header', () => {
  it('should render the component without problems', () => {
    render(<Header />)
  })

  it('should render a logo with the correct image', () => {
    render(<Header />)

    const logoElement = screen.getByRole('img')
    expect(logoElement).toBeInTheDocument()
    expect(logoElement).toHaveAttribute('src', '/images/logo.png')
  })

  it('should be a search input rendered', () => {
    render(<Header />)

    const searchInput = screen.getByPlaceholderText('Enter Product Name ...')
    expect(searchInput).toBeInTheDocument()
  })

  it('should render a search button', () => {
    render(<Header />)

    const buttonElement = screen.getByTestId('search_btn')
    expect(buttonElement).toBeInTheDocument()
  })

  it('should render a login button', () => {
    render(<Header />)

    const buttonElement = screen.getByTestId('login_btn')
    expect(buttonElement).toBeInTheDocument()
  })

  it('should render a cart element', () => {
    render(<Header />)

    const cartElement = screen.getByText(/cart/i)
    expect(cartElement).toBeInTheDocument()
  })

  it('should render a cart count', () => {
    render(<Header />)

    const cartCountElement = screen.getByText('2')
    expect(cartCountElement).toHaveTextContent('2')
  })
})
