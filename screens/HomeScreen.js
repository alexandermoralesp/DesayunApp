import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import { primaryColor } from '../utils/constants/colors'

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
        <Text>HomeScreen</Text>
        <PrimaryButton text="Abrir onboarding" onPress={() => navigation.navigate("OnBoarding")}/>
        <PrimaryButton text="Abrir loading" onPress={() => navigation.navigate("Loading")}/>
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