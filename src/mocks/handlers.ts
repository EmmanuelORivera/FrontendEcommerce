import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { ProductStatus } from '../interfaces/IProduct'

const server = setupServer(
  rest.get('http://localhost:5125/api/v1/product/list', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: 'Sample Product 1',
          price: 49.99,
          rating: 4.5,
          seller: 'Sample Seller',
          stock: 50,
          reviews: [
            {
              id: 1,
              name: 'Jane Doe',
              productId: 1,
              comment: 'Great product!',
              rating: 5,
            },
            {
              id: 2,
              name: 'Jane Doe',
              productId: 1,
              comment: 'Great product!',
              rating: 4,
            },
          ],
          images: [
            {
              id: 1,
              url: 'sample-image-1.jpg',
              productId: 1,
              publicCode: null,
            },
            {
              id: 2,
              url: 'sample-image-2.jpg',
              productId: 1,
              publicCode: null,
            },
          ],
          categoryId: 1,
          categoryName: 'Electronics',
          reviewsQuantity: 2,
          status: ProductStatus.Active,
          statusLabel: 'Active',
        },
        {
          id: 2,
          name: 'Sample Product 2',
          price: 49.99,
          rating: 4.5,
          seller: 'Sample Seller',
          stock: 50,
          reviews: [
            {
              id: 1,
              name: 'Jane Doe',
              productId: 1,
              comment: 'Great product!',
              rating: 5,
            },
            {
              id: 2,
              name: 'Jane Doe',
              productId: 1,
              comment: 'Great product!',
              rating: 4,
            },
          ],
          images: [
            {
              id: 1,
              url: 'sample-image-1.jpg',
              productId: 1,
              publicCode: null,
            },
            {
              id: 2,
              url: 'sample-image-2.jpg',
              productId: 1,
              publicCode: null,
            },
          ],
          categoryId: 1,
          categoryName: 'Electronics',
          reviewsQuantity: 2,
          status: ProductStatus.Active,
          statusLabel: 'Active',
        },
      ])
    )
  })
)

export default server
