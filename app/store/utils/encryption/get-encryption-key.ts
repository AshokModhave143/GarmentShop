import * as Keychain from 'react-native-keychain'
import { generateSecureRandom } from 'react-native-securerandom'
import binaryToBase64 from 'react-native/Libraries/Utilities/binaryToBase64'

import { GetEncryptionKeyType } from '../../../types'

const encryptionKey = 'ENCRYPTED_KEY'
const RANDOM_SECURE_LENGTH = 32

export const getEncryptionKey: GetEncryptionKeyType = async () => {
  try {
    const existingCredentials = await Keychain.getGenericPassword()
    if (existingCredentials) {
      return { isFresh: false, key: existingCredentials.password }
    }

    const randomBytes = await generateSecureRandom(RANDOM_SECURE_LENGTH)
    if (!randomBytes) {
      throw new Error('Error in generating secure random key buffer')
    }

    const randomBytesString = binaryToBase64(randomBytes)
    if (!randomBytesString) {
      throw new Error('Error in converting random bytes into string base 64')
    }

    const hasSetCredentials = await Keychain.setGenericPassword(encryptionKey, randomBytesString)
    if (hasSetCredentials) {
      return { isFresh: true, key: randomBytesString }
    }
    throw new Error('Error setting the generic password on keychain')
  } catch (error) {
    throw new Error(error)
  }
}

const generateKey = () => {
  return getEncryptionKey().then(async (value) => {
    return await value
  })
}

export default generateKey
