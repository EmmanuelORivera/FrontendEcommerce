export const parseToken = (token: string) => {
  const encodedPayload = token.split('.')[1]
  const urlSafePayload = encodedPayload.replace(/-/g, '+').replace(/_/g, '/')
  const decodedPayload = Buffer.from(urlSafePayload, 'base64').toString('utf-8')
  return JSON.parse(decodedPayload)
}
