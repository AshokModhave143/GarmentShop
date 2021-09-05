import { encryptTransform } from 'redux-persist-transform-encrypt'

export const createEncryptionTransform = (secretKey: string) => {
  encryptTransform({
    secretKey,
    // eslint-disable-next-line node/handle-callback-err
    onError: (error) => {
      throw new Error('Error with encryption library')
    },
  })
}
