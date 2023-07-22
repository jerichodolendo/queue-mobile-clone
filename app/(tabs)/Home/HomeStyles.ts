import { StyleSheet } from 'react-native'

const HomeStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  title: {
    color: 'grey',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 18
  },
  columnWrapper: {
    justifyContent: 'space-evenly'
  },
  searchContainer: {
    height: 50,
    marginHorizontal: 18,
    marginVertical: 9,
    paddingHorizontal: 14,
    flexDirection: 'row',
    padding: 10,
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 10
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: 'white',
    marginLeft: 6,
    paddingLeft: 6
  }
})

export default HomeStyles
