import { SafeAreaView, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import ProfileStyles from './ProfileStyles'
import Route from '@/app/components/Route/Route'
import React from 'react'

const Profile = () => {
  const {
    container,
    title,
    profileWrapper,
    profileHeader,
    nameStyle,
    idStyle
  } = ProfileStyles

  return (
    <SafeAreaView style={container}>
      <View>
        <Text style={title}>Profile</Text>
      </View>

      <View style={profileWrapper}>
        <View style={profileHeader}>
          <Text style={nameStyle}>Anonymous Guest</Text>
          <Text style={idStyle}>
            1jk2hd3i-d123-23d2-sd9f-s9d8f834
          </Text>
        </View>

        <FontAwesome name='user-circle-o' size={72} color='#199dd9' />
      </View>

      <Route />
    </SafeAreaView>
  )
}

export default Profile
