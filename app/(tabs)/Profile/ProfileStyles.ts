import { StyleSheet } from 'react-native'

const ProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  title: {
    color: 'grey',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 14,
    marginTop: 6
  },
  profileWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    paddingHorizontal: 16,
    flexGrow: 0
  },
  profileHeader: {
    flex: 1,
    justifyContent: 'center',
    flexShrink: 1,
    paddingRight: 16
  },
  textStyle: {
    color: 'black'
  },
  nameStyle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  idStyle: {
    fontSize: 18,
    flexWrap: 'wrap'
  }
})

export default ProfileStyles
