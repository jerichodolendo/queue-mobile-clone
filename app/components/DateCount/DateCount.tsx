import { View, Text } from 'react-native'
import React from 'react'
import DateCountStyles from './DateCountStyles'

interface DateCountProps {
  count: number
  title: string
}

const DateCount = (props: DateCountProps) => {
  const { count, title } = props

  const { containerWrapper, countStyle, textStyle, titleStyle } =
    DateCountStyles

  return (
    <View style={containerWrapper}>
      <Text style={[textStyle, countStyle]}>{count}</Text>
      <Text style={[textStyle, titleStyle]}>{title}</Text>
    </View>
  )
}

export default DateCount
