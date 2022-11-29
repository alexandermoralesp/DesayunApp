import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { primaryColor } from '../utils/constants/colors'


const PaymentAdded = () => {
    return (
        <>
            <View>
                <Text>Logo</Text>
            </View>
            <View>
                <Text>412121212</Text>
            </View>
            <View>
                <Button title='Eliminar'/>
            </View>
        </>
    )
}

const PaymentToAdd = () => {
    return (
        <View>
            <View>
                <Text>Icon</Text>
            </View>
            <View>
                <Text>Nueva tarjeta</Text>
            </View>
            <View>
                <Button title='Remove'/>
            </View>
        </View>
    )
}
function PaymentScreen() {
    return (
        <View style={styles.container}>
            <Text>Mis tarjetas</Text>
            <View style={styles.body}>
            <PaymentAdded/>
            <PaymentToAdd/>
            </View>
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
    },
    body: {
        backgroundColor: "gray"
    }
})
export default PaymentScreen