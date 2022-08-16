import React from 'react'
import * as R from 'ramda'
import { Controller, useFormContext, ValidationRule } from 'react-hook-form'
import { StyleProp, TextStyle, View, Text } from 'react-native'
import { TextInput } from 'react-native-paper'
import { styles } from '../login-screen.style'

export type TextInputComponentProps = {
  name: string
  label?: string
  defaultValue?: string
  rules?: string | ValidationRule
  onChangeText?: (e) => void
  style?: StyleProp<TextStyle>
  placeholder?: string
  required?: boolean
  secureTextEntry?: boolean
}

export const TextInputComponent: React.FC<TextInputComponentProps> = (
  props: TextInputComponentProps,
) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()
  return (
    <View>
      <Controller
        name={props.name}
        control={control}
        defaultValue={props.defaultValue || ''}
        rules={{
          required: props.required ? 'This is required' : false,
        }}
        render={({ field: { onChange } }) => (
          <TextInput
            autoComplete={false}
            mode="outlined"
            label={props.label}
            onChangeText={onChange}
            style={[styles.TEXT_INPUT, props.style]}
            placeholder={props.placeholder || `Enter ${props.name}`}
            error={R.isEmpty(errors[props.name])}
            secureTextEntry={props.secureTextEntry || false}
          />
        )}
      />
      {errors[props.name] && <Text style={styles.ERROR_TEXT}>{errors[props.name].message}</Text>}
    </View>
  )
}
