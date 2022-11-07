import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
const ProfileItem = ({ profile }) => {
    return (
        <View style={styles.body}>
            <View style={styles.leftContainer}>
                <MaterialIcons name="person" size={45} style={styles.avatar} />
                <View style={styles.details}>
                    <Text style={styles.name}>Alexander Morales Panitz</Text>
                    <Text style={styles.plan}>Plan gratuito</Text>
                </View>
            </View>
            <MaterialIcons name="edit" size={20} />
        </View>
    )
}

export default ProfileItem

const styles = StyleSheet.create({
    body: {
        paddingLeft: 20,
        paddingRight: 30,
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 30,
    },
    details: {
        paddingLeft: 10,
    },
    plan: {
        fontWeight: "500",
        color: "green",
    },
    leftContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    avatar: {
        color: "black",
    },
    name: {
        fontWeight: "500",
        fontSize: 15
    }

})