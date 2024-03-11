import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const navigation = navigate()

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text>Go to Profile</Text>
      </TouchableOpacity>

    </View>
  )
} 