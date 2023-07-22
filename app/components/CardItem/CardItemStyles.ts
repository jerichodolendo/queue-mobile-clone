import { StyleSheet } from 'react-native'

const CardItemStyles = StyleSheet.create({
  cardStyle: {
    height: 190,
    width: '46%',
    padding: 8
  },
  infoStyle: {
    flexDirection: 'row',
    alignContent: 'flex-start'
  },
  textStyle: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'normal',
    padding: 4
  },
  typeStyle: {
    color: 'grey',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 2
  },
  nameStyle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  usersStyle: {
    fontSize: 12
  },
  image: {
    marginVertical: 5,
    resizeMode: 'cover',
    height: '50%',
    width: '100%',
    borderRadius: 10
  }
})

export default CardItemStyles
