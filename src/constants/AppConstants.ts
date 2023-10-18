const production = {
  url: {
    API_URL: 'https://somerealurl.com',
  },
}

const development = {
  url: {
    API_URL: 'http://localhost:5125',
  },
}

export const config =
  process.env.NODE_ENV == 'development' ? development : production
