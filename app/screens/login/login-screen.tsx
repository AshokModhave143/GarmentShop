import R from 'ramda'
import React, { useState } from 'react'
import { Controller, useForm, FormProvider } from 'react-hook-form'
import { View } from 'react-native'
import { Card, TextInput, Title, Paragraph, Button } from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient'
import { Text } from '../../components'
import { useAppDispatch } from '../../store'
import { login } from '../../store/auth/auth.slice'
import { styles } from './login-screen.style'
import { TextInputComponent } from './elements/text-input-component'
import { SvgUri } from 'react-native-svg'
import AccountSVG from './elements/account.svg'

export type LoginProps = {
  navigation: any
}
export const LoginScreen: React.FC<LoginProps> = (props: LoginProps) => {
  const [val, setVal] = useState(null)
  const dispatch = useAppDispatch()
  const methods = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const onSubmit = (data) => {
    dispatch(login(data))
  }

  return (
    <LinearGradient
      colors={['#cc2b5e', '#753a88']}
      start={{ x: 0.3, y: 0.3 }}
      style={styles.GRADIANT_CONTANER}
    >
      <FormProvider {...methods}>
        <Card style={styles.CARD} mode="outlined">
          <Card.Title title="Login"></Card.Title>
          <Card.Content>
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: 'yellow',
                borderRadius: 50,
                justifyContent: 'center',
                // alignItems: 'center',
                alignContent: 'center',
              }}
            >
              <AccountSVG height={200} width={200} />
            </View>
            {/* <Controller
              name="username"
              control={methods.control}
              defaultValue=""
              rules={{
                required: 'This is required.',
                maxLength: 5,
              }}
              render={({ field: { onChange } }) => (
                <TextInput
                  autoComplete={false}
                  mode="outlined"
                  label="Username"
                  onChangeText={onChange}
                  style={styles.TEXT_INPUT}
                  placeholder="Enter username"
                  error={R.isEmpty(methods.formState.errors.username)}
                />
              )}
            />
            {methods.formState.errors.username && (
              <Text style={styles.TEXT}>{methods.formState.errors.username.message}</Text>
            )}
            <Controller
              name="password"
              control={methods.control}
              defaultValue=""
              rules={{
                required: 'This is required.',
              }}
              render={({ field: { onChange } }) => (
                <TextInput
                  autoComplete={false}
                  label="Password"
                  onChangeText={onChange}
                  style={styles.TEXT_INPUT}
                  placeholder="Enter password"
                />
              )}
            /> */}

            <TextInputComponent
              name="username"
              label="Username"
              placeholder="Enter username"
              required={true}
            />
            <TextInputComponent
              name="password"
              label="Password"
              placeholder="Enter password"
              required={true}
              secureTextEntry={true}
            />
          </Card.Content>
          <Card.Actions>
            <Button title="Login" onPress={methods.handleSubmit(onSubmit)} />
          </Card.Actions>
        </Card>
      </FormProvider>
    </LinearGradient>
  )
}
