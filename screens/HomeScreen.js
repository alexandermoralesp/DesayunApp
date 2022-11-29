import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { primaryColor, secondaryColor, thirdColor } from '../utils/constants/colors'

const data = [
  {
    id: 1,
    day: "Lunes 24",
  },
  {
    id: 2,
    day: "Martes 25",
  },
  {
    id: 3,
    day: "Miercoles 26",
  },
  {
    id: 4,
    day: "Miercoles 26",
  },
  {
    id: 5,
    day: "Lunes 24",
  },
  {
    id: 6,
    day: "Martes 25",
  },
  {
    id: 7,
    day: "Miercoles 26",
  },
  {
    id: 8,
    day: "Miercoles 26",
  },
];

const ItemDay = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        marginHorizontal: 2,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
      }}>
      <Text style={{ paddingHorizontal: 10, fontWeight: "500", color: "gray" }}>{item.day}</Text>
    </TouchableOpacity>
  );
}

const FoodItem = () => (<TouchableOpacity style={{
  marginVertical: 4,
  backgroundColor: "white",
  paddingVertical: 9,
  flexDirection: "column",
  shadowColor: "#037777777777",
  shadowOffset: {
    width: -1,
    height: 0,
  },
  shadowOpacity: -1.22,
  shadowRadius: 1.22,

  elevation: 2,
}}>
  <View style={{ flexDirection: "row", justifyContent: "space-between", paddingLeft: 4 }}>
    <View style={{ borderRadius: 9 }}>
      <Image source={{ uri: "https://comeperuano.b-cdn.net/wp-content/uploads/2019/10/receta-pan-con-pollo.jpg" }} style={{ height: 140, width: 140, resizeMode: "cover", borderRadius: 10 }} />
    </View>
    <View style={{ flexDirection: "column", maxWidth: 189, paddingHorizontal: 2 }}>
      <View style={{ marginTop: 1 }}>
        <Text style={{ fontWeight: "699", color: thirdColor }}>Pan con lomo</Text>
      </View>
      <View>
        <Text>Informacion del Pan con pollo y cremas y un poco de papas fritas</Text>
      </View>
    </View>
  </View>
  <TouchableOpacity style={{ height: 14, width: 15, borderColor: secondaryColor, borderWidth: 2, borderRadius: 10, marginTop: 8, backgroundColor: secondaryColor, marginLeft: 5 }} />
</TouchableOpacity>)
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safe_area}>
      <View style={styles.container}>
        {/* Nav bar */}
        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 12, alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <View style={{ backgroundColor: "gray", height: 25, width: 25, borderRadius: 50 }} />
            <Text style={{ paddingLeft: 10, fontWeight: "500", color: thirdColor }}>Bienvenido, Alexander</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name='notifications-sharp' size={18} color={thirdColor} />
          </View>
        </View>
        {/* Address */}
        <View style={{
          flexDirection: "row",
          paddingVertical: 10,
          justifyContent: "space-between",
          backgroundColor:
            primaryColor,
          borderRadius: 15,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          elevation: 6,
          marginBottom: 10
        }}>
          <TouchableOpacity style={{ flexDirection: "row", paddingLeft: 10 }}>
            <View>
              <MaterialIcons name="place" size={20} color={thirdColor} />
            </View>
            <View style={{ paddingLeft: 10 }}>
              <Text style={{ color: thirdColor }}>Jr. Jorge Medrano, UTEC</Text>
            </View>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", paddingRight: 10 }}>
            <MaterialIcons name="expand-more" size={20} color={thirdColor} />
          </View>
        </View>
        {/* Days */}
        <View style={{marginTop: 4}}>
          <FlatList
            horizontal
            data={data}
            renderItem={ItemDay}
          />
        </View>
        {/* Delivery */}
        <View style={{ flexDirection: "row", marginVertical: 20 }}>
          <Text style={{ fontWeight: "500" }}>Hora de entrega</Text>
          <View style={{ marginLeft: 5 }}>
            <Text>7:00 AM - 9:00 AM</Text>
          </View>
        </View>
        {/* Breaks */}
        <View>
          <Text style={{ fontWeight: "600" }}>Panes</Text>
          <FlatList 
            data={data}
            renderItem={FoodItem}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe_area: {
    height: "100%"
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: primaryColor
  }
})
export default HomeScreen