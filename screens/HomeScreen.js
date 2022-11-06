import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import { primaryColor } from '../utils/constants/colors'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <PrimaryButton text="Abrir onboarding" onPress={() => navigation.navigate("OnBoarding")} />
      <PrimaryButton text="Abrir loading" onPress={() => navigation.navigate("Loading")} />
      <PrimaryButton text="Sign In" onPress={() => navigation.navigate("SignIn")} />
      <PrimaryButton text="Sign Up" onPress={() => navigation.navigate("SignUp")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    alignItems: "center",
    backgroundColor: primaryColor
  }
})
export default HomeScreen