import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import {colors} from './src/global/styles'
import  {SignInScreen}  from './src/screens/authScreens/SignInScreen'

const App = () => {
  return (
    <View style={styles.container}>
    <StatusBar 
      barStyle="light-content"
      backgroundColor={colors.statusbar}
    />
    <SignInScreen />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})