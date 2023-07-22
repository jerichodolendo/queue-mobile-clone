import { ImageBackground, Text, View } from 'react-native'
import Thumbnails from '@/assets/global/Thumbnails'
import ImageViewStyles from './ImageViewStyles'

interface ImageViewProps {
  count: number
  title: string
  id: string
}

const ImageView = (props: ImageViewProps) => {
  const { count, title, id } = props

  const {
    cardStyle,
    textStyle,
    textWrapper,
    countStyle,
    titleStyle
  } = ImageViewStyles

  return (
    <ImageBackground
      source={(Thumbnails as any)['image' + id]}
      style={cardStyle}
      imageStyle={cardStyle}
    >
      <View style={textWrapper}>
        <Text style={[textStyle, countStyle]}>{count}</Text>
        <Text style={[textStyle, titleStyle]}>{title}</Text>
      </View>
    </ImageBackground>
  )
}

export default ImageView
