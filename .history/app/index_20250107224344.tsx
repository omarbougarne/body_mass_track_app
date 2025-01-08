import React from 'react'
import { View, Text } from 'react-native'

function index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: 'red' }}>ana nadi</Text>
      Link to <a href="/contact">About</a>
    </View>
  )
}

export default index
