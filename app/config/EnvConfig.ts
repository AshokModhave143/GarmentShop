import config from 'react-native-config'
const customConfig = {
  useStorybook: false,
  useStorybookToggle: true,
}
export const EnvConfig = { ...config, ...customConfig }
