import {
  View, Text, TextInputComponent, TouchableOpacity, useWindowDimensions,
  StyleSheet, TextInput, Image,
} from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { primaryColor, thirdColor } from '../utils/constants/colors'

const LOGO = "../assets/images/onboarding_two.png"
const GOOGLE = "https://cdn.iconscout.com/icon/free/png-256/google-160-189824.png"
const FACEBOOK = "https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png"
const APPLE = "https://cdn.iconscout.com/icon/free/png-256/apple-1496035-1265529.png"

const SocialMediaComponent = ({ uri }) => {
  return (
    <TouchableOpacity style={styles.socialMedia}>
      <Image source={{ uri: uri }} style={styles.imageSocialMedia} />
    </TouchableOpacity>
  )
}

const SignUpScreen = ({ navigation }) => {
  const windowHeight = useWindowDimensions().height;
  return (
    <View style={[styles.body, { minHeight: Math.round(windowHeight), }]}>
      <Image source={require(LOGO)} style={styles.image} />
      <Text style={styles.title}>Crear tu cuenta</Text>
      {/* Number input */}
      <View
        style={styles.inputContainer}
      >
        <Entypo name='phone' size={20} color={thirdColor} />
        <TextInput style={styles.textInput} keyboardType="number-pad" placeholder='+51 999 999 999'/>
      </View>

      {/* Emailinput */}
      <View
        style={styles.inputContainer}
      >
        <Entypo name='mail' size={20} color={thirdColor} />
        <TextInput style={styles.textInput} placeholder="john@doe.com" />
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}>
        {/* <Checkbox /> */}
        <Text style={styles.remember}>Recordar contraseña</Text>
      </View>

      <TouchableOpacity style={styles.button} activeOpacity={0.85}>
        <Text style={{ color: "white", textAlign: "center", fontWeight: "500" }}>Registro</Text>
      </TouchableOpacity>
      <Text style={styles.textDivider}>o continuar con</Text>
      <View style={styles.socialMediaContainer}>
        {/* Google */}
        <SocialMediaComponent uri={GOOGLE} />
        {/* Facebook */}
        <SocialMediaComponent uri={FACEBOOK} />
        {/* Apple */}
        <SocialMediaComponent uri={APPLE} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "gray" }}>¿Ya tienes una cuenta?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={{ color: thirdColor, marginLeft: 7, fontWeight: "600" }}>
            Iniciar Sesión
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    backgroundColor: primaryColor,
  },
  image:
    { height: 200, width: "100%", resizeMode: "contain" },
  title: { fontSize: 30, fontWeight: "800", marginBottom: 25, color: thirdColor },
  inputContainer: {
    backgroundColor: "#FAFAFA",
    width: "90%",
    borderRadius: 15,
    height: 45,
    paddingHorizontal: 20,
    marginVertical: 10,
    paddingVertical: 5,
    flexDirection: "row", alignItems: "center",
    borderColor: thirdColor,
    borderWidth: 3, elevation: 10,
    shadowColor: thirdColor
  },
  textInput: {
    width: "100%",
    marginLeft: 10,
    fontWeight: "500",
    fontSize: 16,
    color: thirdColor
  },
  remember:
    { fontWeight: "500", color: thirdColor }
  ,
  button: {
    elevation: 8,
    backgroundColor: thirdColor,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginVertical: 12,
    width: "90%",
  },
  textDivider: {
    marginVertical: 15,
    color: "grey"
  },
  socialMediaContainer: {
    flexDirection: "row",
    marginBottom: 7
  },
  socialMedia: {
    flexDirection: "row", borderRadius: 15,
    paddingHorizontal: 40, paddingVertical: 10, borderColor: "#eee",
    borderWidth: 2, marginVertical: 5, justifyContent: "center", marginHorizontal: 4
  },
  imageSocialMedia: {
    marginRight: 8, resizeMode: "contain",
    height: 20, width: 20, justifyContent: "center"
  }
})
export default SignUpScreen