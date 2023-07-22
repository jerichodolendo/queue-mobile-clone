import { StyleSheet } from 'react-native'

const RouteStyles = (activeScreen?: string, item?: string) =>
  StyleSheet.create({
    buttonsStyle: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginHorizontal: 14,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: 'grey'
    },
    tab: {
      flex: 0.5,
      paddingVertical: 6,
      paddingHorizontal: 5,
      backgroundColor: activeScreen === item ? 'white' : 'grey'
    },
    tabText: {
      textAlign: 'center',
      color: activeScreen === item ? 'grey' : 'white'
    },
    dashboardButtonsStyle: {
      flex: 0.5,
      borderTopLeftRadius: 7,
      borderBottomLeftRadius: 7
    },
    optionsButtonsStyle: {
      flex: 0.5,
      borderTopRightRadius: 7,
      borderBottomRightRadius: 7
    }
  })

export default RouteStyles
