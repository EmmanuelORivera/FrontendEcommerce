export const removeEmptyProperties = (
  obj: Record<string, any>
): Record<string, any> => {
  let newObject: Record<string, any> = {}

  Object.keys(obj).forEach((key) => {
    if (obj[key] !== undefined && obj[key]) newObject[key] = obj[key]
  })

  return newObject
}
