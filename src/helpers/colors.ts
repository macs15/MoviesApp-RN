import ImageColors from 'react-native-image-colors'

export const getColors = async (uri: string) => {
  const colors = await ImageColors.getColors(uri, {})
  let primary
  let secondary

  if (colors.platform === 'android') {
    primary = colors.dominant || '#fff'
    secondary = colors.average || '#fff'
  } else {
    primary = colors.primary
    secondary = colors.secondary
  }

  return [primary, secondary]
}
