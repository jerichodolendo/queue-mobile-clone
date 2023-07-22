import { StyleSheet } from 'react-native'

const ImageViewStyles = StyleSheet.create({
  cardStyle: {
    height: 105,
    width: 105,
    borderRadius: 10
  },
  textWrapper: {
    position: 'absolute',
    bottom: 5,
    paddingLeft: 5
  },
  textStyle: {
    color: 'white',
    includeFontPadding: false
  },
  countStyle: {
    fontSize: 30
  },
  titleStyle: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'bold'
  }
})

export default ImageViewStyles
