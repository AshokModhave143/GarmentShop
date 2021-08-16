import React, { useState, useEffect } from 'react'
import { EncryptionKeyType } from '../../../types'

export type EncryptionGateType = {
  getEncryptionKey: () => Promise<EncryptionKeyType>
  children: (EncryptionKeyType) => any
}
export const EncryptionGate = ({ getEncryptionKey, children }: EncryptionGateType) => {
  const [encryptionKey, setEncryptionKey] = useState({ isFresh: false, key: null })

  useEffect(() => {
    ;(async () => {
      const { isFresh, key } = await getEncryptionKey()
      setEncryptionKey({ isFresh, key })
    })()
  }, [getEncryptionKey])

  if (!encryptionKey.key) return null

  return children(encryptionKey)
}
