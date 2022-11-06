import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { secondaryColor, thirdColor } from '../utils/constants/colors'

const PrimaryButton = ({text, onPress, style}) => {
  return (
    <TouchableOpacity style={[style, {
        elevation: 8,
        backgroundColor: thirdColor,
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 18,
    }]}
    activeOpacity={0.9}
    onPress={onPress}
    >
        <Text style={{ color: "white", textAlign: "center", fontWeight: "500" }}>{text}</Text>
    </TouchableOpacity>
  )
}
export default PrimaryButton