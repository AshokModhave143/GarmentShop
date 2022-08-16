import config from 'react-native-config'
const customConfig = {
  useStorybook: false,
  useStorybookToggle: false,
}
export const EnvConfig = { ...config, ...customConfig }
