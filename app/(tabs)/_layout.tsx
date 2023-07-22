import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name='Home'
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={focused ? '#199dd9' : 'grey'}
            />
          )
        }}
      />
      <Tabs.Screen
        name='Tickets'
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'pricetags' : 'pricetags-outline'}
              size={24}
              color={focused ? '#199dd9' : 'grey'}
            />
          )
        }}
      />
      <Tabs.Screen
        name='Profile'
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={
                focused ? 'person-circle' : 'person-circle-outline'
              }
              size={24}
              color={focused ? '#199dd9' : 'grey'}
            />
          )
        }}
      />
    </Tabs>
  )
}
