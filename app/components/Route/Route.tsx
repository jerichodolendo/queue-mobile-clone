import { useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import RouteStyles from './RouteStyles'
import Dashboard from '@/app/(tabs)/Profile/(dashboard)/Dashboard'
import Options from '@/app/(tabs)/Profile/(options)/Options'

const Route = () => {
  const { buttonsStyle, dashboardButtonsStyle, optionsButtonsStyle } =
    RouteStyles()

  const [activeScreen, setActiveScreen] = useState('Dashboard')

  return (
    <View>
      <View style={buttonsStyle}>
        <TouchableOpacity
          style={[
            RouteStyles(activeScreen, 'Dashboard').tab,
            dashboardButtonsStyle
          ]}
          onPress={() => {
            setActiveScreen('Dashboard')
          }}
        >
          <Text
            style={RouteStyles(activeScreen, 'Dashboard').tabText}
          >
            Dashboard
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            RouteStyles(activeScreen, 'Options').tab,
            optionsButtonsStyle
          ]}
          onPress={() => {
            setActiveScreen('Options')
          }}
        >
          <Text style={RouteStyles(activeScreen, 'Options').tabText}>
            Options
          </Text>
        </TouchableOpacity>
      </View>
      {activeScreen === 'Dashboard' ? <Dashboard /> : <Options />}
    </View>
  )
}

export default Route
