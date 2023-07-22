import { StyleSheet } from 'react-native'

const DashboardStyles = StyleSheet.create({
  containerWrapper: {
    marginVertical: 10,
    paddingHorizontal: 14
  },
  titleStyle: {
    color: 'grey',
    fontSize: 16,
    letterSpacing: 2
  },
  detailsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 8,
    padding: 6,
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 10
  },
  colon: {
    fontSize: 20,
    color: 'grey'
  }
})

export default DashboardStyles
