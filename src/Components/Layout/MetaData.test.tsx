import { render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import MetaData from './MetaData'

describe('MetaData', () => {
  it('should render the component without problems', () => {
    render(<MetaData title="" />)
  })

  it('should change the title metadata', async () => {
    const title = 'Test Title'
    render(<MetaData title={title} />)

    await waitFor(() => {
      expect(document.title).toBe(`${title} - Ecommerce Amazon`)
    })
  })
})
