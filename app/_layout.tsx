import { Stack } from 'expo-router'
import { Image } from 'react-native'

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: () => (
          <Image
            style={{ height: 35, width: 35 }}
            source={require('../assets/images/q_icon.png')}
            resizeMode='contain'
          />
        ),
        headerTitleAlign: 'center',
        headerShadowVisible: false
      }}
    >
      <Stack.Screen name='(tabs)' />
    </Stack>
  )
}

export default StackLayout
