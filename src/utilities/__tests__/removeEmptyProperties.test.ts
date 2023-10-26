import { removeEmptyProperties } from '../removeEmptyProperties'
import { it, describe, expect } from 'vitest'

describe('removeEmptyProperties', () => {
  it('removes properties with falsy and undefined values', () => {
    const data = {
      name: 'John',
      age: 30,
      address: null,
      email: undefined,
      city: '',
      zipcode: 12345,
    }

    const cleanedData = removeEmptyProperties(data)

    expect(cleanedData).toEqual({
      name: 'John',
      age: 30,
      zipcode: 12345,
    })
  })

  it('does not modify the original object', () => {
    const data = {
      name: 'John',
      age: 30,
      address: null,
      email: undefined,
      city: '',
      zipcode: 12345,
    }

    const originalData = { ...data }

    removeEmptyProperties(data)

    expect(data).toEqual(originalData)
  })

  it('handles an object with no properties to remove', () => {
    const data = {
      name: 'Alice',
      age: 25,
    }

    const cleanedData = removeEmptyProperties(data)

    expect(cleanedData).toEqual({
      name: 'Alice',
      age: 25,
    })
  })
})
