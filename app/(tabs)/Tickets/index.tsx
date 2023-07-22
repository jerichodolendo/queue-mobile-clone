import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  View
} from 'react-native'
import React from 'react'
import TicketStyles from './TicketsStyles'
import { FAB } from '@rneui/themed'

const Tickets = () => {
  const {
    container,
    refreshTextStyle,
    refreshWrapper,
    ticketsContainer,
    textStyle,
    title
  } = TicketStyles

  return (
    <SafeAreaView style={container}>
      <Text style={title}>Tickets (0)</Text>
      <View style={ticketsContainer}>
        <Text style={textStyle}>No Active Tickets</Text>
        <View style={refreshWrapper}>
          <TouchableOpacity>
            <Text style={[textStyle, refreshTextStyle]}>
              Tap to Refresh
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <FAB
        visible={true}
        icon={{ name: 'refresh', color: 'grey' }}
        placement='right'
        size='large'
        color='white'
      />
    </SafeAreaView>
  )
}

export default Tickets
