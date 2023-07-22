import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  View
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import HomeStyles from './HomeStyles'
import Dummy from '@/assets/global/Dummy'
import CardItem from '@/app/components/CardItem/CardItem'
import { FAB } from '@rneui/themed'

const Data = Dummy

const Home = () => {
  const {
    container,
    title,
    columnWrapper,
    searchContainer,
    searchWrapper
  } = HomeStyles

  const [searchTerm, setSearchTerm] = useState('')

  const renderItem = ({
    item
  }: {
    item: {
      name: string
      type: string
      branches: string
      users: string
      src: string
    }
  }) => (
    <CardItem
      companyName={item.name}
      companyType={item.type}
      numOfBranches={item.branches}
      numOfUsers={item.users}
      imgSrc={item.src}
    />
  )

  return (
    <SafeAreaView style={container}>
      <View>
        <FlatList
          columnWrapperStyle={columnWrapper}
          numColumns={2}
          data={Data}
          renderItem={renderItem}
          ListHeaderComponent={
            <View>
              <View style={searchContainer}>
                <Ionicons
                  name='search-outline'
                  size={24}
                  color='grey'
                />
                <View style={searchWrapper}>
                  <TextInput
                    value={searchTerm}
                    onChangeText={(text) => {
                      setSearchTerm(text)
                    }}
                    placeholder='Where do you want to lineup?'
                  />
                </View>
              </View>

              <Text style={title}>Discover</Text>
            </View>
          }
        />
      </View>
      <FAB
        visible={true}
        icon={{ name: 'qr-code', color: 'grey' }}
        placement='right'
        size='large'
        color='white'
      />
    </SafeAreaView>
  )
}

export default Home
