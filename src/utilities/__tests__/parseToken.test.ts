import { describe, expect, it } from 'vitest'
import { parseToken } from '../parseToken'

describe('parseToken', () => {
  it('should parse a valid JWT and return the decoded payload', () => {
    const jwtString =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

    const expectedPayload = {
      sub: '1234567890',
      name: 'John Doe',
      iat: 1516239022,
    }

    const result = parseToken(jwtString)

    expect(result).toEqual(expectedPayload)
  })

  it('should return an empty object with an invalid jwt', () => {
    const invalidJwtString =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

    const result = parseToken(invalidJwtString)

    expect(result).toEqual({})
  })
})
