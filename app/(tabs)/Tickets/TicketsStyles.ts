import { StyleSheet } from 'react-native'

const TicketStyles = StyleSheet.create({
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
  ticketsContainer: {
    marginHorizontal: 28,
    alignItems: 'center'
  },
  textStyle: {
    paddingVertical: 8,
    fontSize: 16,
    color: 'grey'
  },
  refreshWrapper: {
    backgroundColor: 'grey',
    borderRadius: 8,
    alignItems: 'center',
    width: '100%'
  },
  refreshTextStyle: {
    color: 'white'
  }
})

export default TicketStyles
