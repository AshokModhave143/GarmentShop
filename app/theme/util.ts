import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen'

const DEVICE_SIZE = {
  X_WIDTH: 720,
  X_HEIGHT: 1024,
}
/**
 * Width-percentage
 * Converts width dimension to percentage
 * @param dimension directly taken from design wireframe
 * @returns {string} percentage string e.g. '25%'
 */
export const wp = (dimension) => {
  return wp2dp((dimension / DEVICE_SIZE.X_WIDTH) * 100 + '%')
}

/**
 * Height-percentage
 * Converts height dimention to percentage
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '20%'
 */
export const hp = (dimension) => {
  return hp2dp((dimension / DEVICE_SIZE.X_HEIGHT) * 100 + '%')
}
