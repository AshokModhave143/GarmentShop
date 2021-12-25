import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { View, Button } from 'react-native'
import { TextInput } from 'react-native-paper'
import { Text } from '../../components'
import { useAppDispatch } from '../../store'
import { login } from '../../store/auth/auth.slice'
import { styles } from './login-screen.style'

export type LoginProps = {
  navigation: any
}
export const LoginScreen: React.FC<LoginProps> = (props: LoginProps) => {
  const [val, setVal] = useState(null)
  const dispatch = useAppDispatch()
  const { control, watch } = useForm()
  const valuse = watch('username')

  return (
    <View style={styles.FULL}>
      <Text style={styles.TEXT}>Login page</Text>
      <Controller
        name="username"
        control={control}
        defaultValue=""
        rules={{
          required: true,
        }}
        render={({ field: { onChange } }) => (
          <TextInput
            label="Username"
            onChangeText={onChange}
            style={styles.TEXT_INPUT}
            placeholder="Enter username"
          />
        )}
      />
      <Button
        title="Click Me"
        onPress={() => {
          console.log(props)
          dispatch(login({ username: 'ashok', password: '1111' }))
        }}
      />
      <Text style={styles.OUTPUT}>{valuse}</Text>
    </View>
  )
}
