import { expect, describe, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('should render the component with the header', () => {
    render(<App />)

    const headerElement = screen.getByTestId('header')
    expect(headerElement).toBeInTheDocument()
  })
})
