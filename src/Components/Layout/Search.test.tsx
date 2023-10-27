import { Provider } from 'react-redux'
import { beforeEach, describe, expect, it } from 'vitest'
import { store } from '../../store'
import Search from './Search'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

describe('Search', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Search />
        </MemoryRouter>
      </Provider>
    )
  })
  it('should render the component without problems', () => {})

  it('should render a input text', () => {
    const inputElement = screen.getByPlaceholderText('Search Products...')
    expect(inputElement).toBeInTheDocument()
  })

  it('should render a search button', () => {
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })

  it.skip('handles form submission and dispatches search action', async () => {
    // TODO Find out how to test the dispatched functions
  })
})
