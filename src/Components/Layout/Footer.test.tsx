import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Footer from './Footer'

describe('Footer', () => {
  it('should render the component without a problem', () => {
    render(<Footer />)
  })

  it('should render a paragraph with the correct content', () => {
    render(<Footer />)

    const paragraphElement = screen.getByText(
      `Ecommerce Amazon - ${new Date().getFullYear()}, All Rights Reserved`
    )

    expect(paragraphElement).toBeInTheDocument()
  })
})
