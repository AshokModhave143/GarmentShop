import React, { useState } from 'react'
import { View, Button } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
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
  const { control } = useForm()

  return (
    <View style={styles.FULL}>
      <Text style={styles.TEXT}>Hello</Text>
      <Controller
        name="username"
        control={control}
        defaultValue=""
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <TextInput
            value={val}
            onChange={(value: any) => {
              console.log(value)
              setVal(value)
            }}
            style={styles.TEXT_INPUT}
            placeholder="Enter username"
            {...field}
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
      <Text style={styles.OUTPUT}>{JSON.stringify(val)}</Text>
    </View>
  )
}
