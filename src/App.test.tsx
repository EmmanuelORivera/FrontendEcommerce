import { expect, describe, test as it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store'

describe('App', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
  })
  it('should render the component with the header', () => {
    const headerElement = screen.getByTestId('header')
    expect(headerElement).toBeInTheDocument()
  })

  it('should render the component with a footer', () => {
    const footerElement = screen.getByTestId('footer')
    expect(footerElement).toBeInTheDocument()
  })

  it('should render the home component', () => {
    const homeComponent = screen.getByTestId('home')
    expect(homeComponent).toBeInTheDocument()
  })
})
