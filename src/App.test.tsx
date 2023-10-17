import { expect, describe, test as it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('should render the component with the header', () => {
    render(<App />)

    const headerElement = screen.getByTestId('header')
    expect(headerElement).toBeInTheDocument()
  })

  it('should render the component with a footer', () => {
    render(<App />)

    const footerElement = screen.getByTestId('footer')
    expect(footerElement).toBeInTheDocument()
  })

  it('should render the home component', () => {
    render(<App />)

    const homeComponent = screen.getByTestId('home')
    expect(homeComponent).toBeInTheDocument()
  })
})
