import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Settings from '@/assets/global/Settings'
import { Ionicons } from '@expo/vector-icons'
import OptionsStyles from './OptionsStyles'

const Options = () => {
  const Data = Settings

  const { containerWrapper, separatorStyle, optionStyle, textStyle } =
    OptionsStyles

  const renderItem = ({
    item
  }: {
    item: { title: string; icon: any }
  }) => (
    <TouchableOpacity style={optionStyle}>
      <Text style={textStyle}>{item.title}</Text>

      <Ionicons name={item.icon} size={24} color='grey' />
    </TouchableOpacity>
  )

  return (
    <View style={containerWrapper}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={separatorStyle} />}
      />
    </View>
  )
}

export default Options
