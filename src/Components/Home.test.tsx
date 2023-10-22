import { rest } from 'msw'
import server from '../mocks/handlers'
import { render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vitest } from 'vitest'
import { Provider } from 'react-redux'
import Home from './Home'
import { store } from '../store'
import { MemoryRouter } from 'react-router-dom'
import { toast } from 'react-toastify'

vitest.mock('react-toastify', () => ({
  toast: {
    error: vitest.fn(),
  },
}))
describe('Home', () => {
  it('should render component without a problem', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    )
  })

  it('should render the MetaData component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    )

    const MetaDataComponent = screen.getByTestId('meta-data')
    expect(MetaDataComponent).toBeInTheDocument()
  })

  it('should render the Products component when there is data', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    )

    await waitFor(() => {
      const ProductsComponent = screen.getByTestId('products')
      expect(ProductsComponent).toBeInTheDocument()
    })
  })

  it('should render the Loader component when the request is not finished', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    )

    const LoaderComponent = screen.getByTestId('loader')
    expect(LoaderComponent).toBeInTheDocument()
  })

  it('should call the tostify.error method when there is on error on the server', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    )

    server.use(
      rest.get('http://localhost:5125/api/v1/product/list', (req, res, ctx) => {
        return res(
          ctx.delay(1),
          ctx.status(500),
          ctx.json({ error: 'Error on the server' })
        )
      })
    )

    expect(toast.error).not.toHaveBeenCalled()
    await waitFor(() => {
      expect(toast.error).toHaveBeenCalled()
      expect(toast.error).toHaveBeenCalledTimes(1)
    })
  })
})
