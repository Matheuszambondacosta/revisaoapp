import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

import { useNavigation } from '@react-navigation/native'


export default function Home() {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text>Go to Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Category')}>
        <Text>Go to Category</Text>
      </TouchableOpacity>


    </View>
  )
} 