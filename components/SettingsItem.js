import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const SettingsItem = ({ item }) => {
    const iconColor = item.icon === "logout" ? "red": "black";
    return (
        <TouchableOpacity style={styles.body} activeOpacity={0.7}>
            <View style={styles.container}>
                <MaterialIcons name={item.icon} style={[styles.icon, {color: iconColor}
                ]}/>
                <Text style={[styles.description, {color: iconColor}]}>{item.description}</Text>
            </View>
            <View>
                <MaterialIcons name="navigate-next" style={[styles.icon, {color: iconColor}]}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    body: {
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 20,
        marginVertical: 13,
        justifyContent: "space-between",
        width: "100%"
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        marginRight: 10,
        fontSize: 18,
    },
    description: {
        fontWeight: "500",
        fontSize: 15
    }
})
export default SettingsItem