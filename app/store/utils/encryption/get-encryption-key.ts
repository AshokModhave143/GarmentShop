export const getEncryptionKey = () => {
  const key = 'MY_PERSONAL_KEY'
  const isFresh = true
  return { isFresh, key }
}
