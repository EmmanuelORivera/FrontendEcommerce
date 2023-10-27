import { render, screen, fireEvent } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import Header from './Header'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../store'

describe('Header', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    )
  })
  it('should render the component without problems', () => {})

  it('should render a logo with the correct image', () => {
    const logoElement = screen.getByRole('img')
    expect(logoElement).toBeInTheDocument()
    expect(logoElement).toHaveAttribute('src', '/images/logo.png')
  })

  it('should render a Search component', () => {
    const SearchComponent = screen.getByTestId('search')
    expect(SearchComponent).toBeInTheDocument()
  })

  it('should render a login button', () => {
    const buttonElement = screen.getByTestId('login_btn')
    expect(buttonElement).toBeInTheDocument()
  })

  it('should render a cart element', () => {
    const cartElement = screen.getByText(/cart/i)
    expect(cartElement).toBeInTheDocument()
  })

  it('should render a cart count', () => {
    const cartCountElement = screen.getByText('2')
    expect(cartCountElement).toHaveTextContent('2')
  })
})
