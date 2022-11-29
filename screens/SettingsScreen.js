import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileItem from '../components/ProfileItem'
import SettingsItem from '../components/SettingsItem'

const items = [
  {
    id: 1,
    icon: "local-offer",
    description: "Promociones"
  },
  {
    id: 2,
    icon: "payment",
    description: "Métodos de pago"
  },
  {
    id: 3,
    icon: "person",
    description: "Perfil"
  },
  {
    id: 4,
    icon: "place",
    description: "Direcciones"
  },
  {
    id: 5,
    icon: "notifications",
    description: "Notificaciones"
  },
  {
    id: 6,
    icon: "security",
    description: "Seguridad"
  },
  {
    id: 7,
    icon: "visibility",
    description: "Cambiar tema"
  },
  {
    id: 8,
    icon: "help",
    description: "Centro de ayuda"
  },
  {
    id: 9,
    icon: "group",
    description: "Invita a tus compañeros"
  },
  {
    id: 10,
    icon: "logout",
    description: "Cerrar Sesión"
  }
]

const SettingsScreen = () => {
  return (
    <SafeAreaView>
      {/* <Text style={styles.body}>Settings</Text> */}
      <ProfileItem/>
      {
        items.map(
          (item, index) => <SettingsItem item={item} key={index}/>
        )
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body: {
    fontSize: 21,
    fontWeight: "600",
    paddingHorizontal: 20,
    paddingTop: 15,
  },

})
export default SettingsScreen