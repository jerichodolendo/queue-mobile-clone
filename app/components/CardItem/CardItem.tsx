import { View, Text, TouchableOpacity, Image } from 'react-native'
import CardItemStyles from './CardItemStyles'
import Thumbnails from '../../../assets/global/Thumbnails'

interface Props {
  companyName: string
  companyType: string
  numOfBranches: string
  numOfUsers: string
  imgSrc: string
}

const CardItem = (props: Props) => {
  const {
    companyName,
    companyType,
    numOfBranches,
    numOfUsers,
    imgSrc
  } = props

  const {
    cardStyle,
    infoStyle,
    textStyle,
    typeStyle,
    nameStyle,
    usersStyle,
    image
  } = CardItemStyles

  return (
    <TouchableOpacity style={cardStyle}>
      <Image
        style={image}
        source={(Thumbnails as any)['image' + imgSrc]}
      />

      <View style={infoStyle}>
        <Text style={[textStyle, typeStyle]}>{companyType}</Text>
        <Text style={textStyle}>{numOfBranches}</Text>
      </View>

      <Text style={nameStyle}>{companyName}</Text>
      <Text style={usersStyle}>{numOfUsers}</Text>
    </TouchableOpacity>
  )
}

export default CardItem
