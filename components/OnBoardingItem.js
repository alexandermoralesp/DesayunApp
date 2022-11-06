import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { default as React, useCallback, useEffect } from 'react';
import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { primaryColor, secondaryColor } from '../utils/constants/colors';
import PrimaryButton from './PrimaryButton';

const OnBoardingItem = ({ item, navigation }) => {
    const [fontsLoaded] = useFonts({
        'Poppins': require('../assets/fonts/poppins/Poppins-Regular.ttf'),
        'PoppinsMedium': require('../assets/fonts/poppins/Poppins-Medium.ttf'),
        'PoppinsBold': require('../assets/fonts/poppins/Poppins-Bold.ttf'),
    });

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);
    const { width } = useWindowDimensions();
    if (!fontsLoaded) {
        return <Text>Font not loading</Text>;
    } else {
        return (
            <View style={
                {
                    flex: 1, width: width,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: 40,
                    backgroundColor: primaryColor
                }
            }
            >
                <Image source={item.image} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                {item.id === 3 ?
                    <PrimaryButton text="Iniciar ahora"
                        onPress={() => navigation.goBack()}
                    />
                    :
                    null
                }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    image: { height: 250, width: "100%", resizeMode: "contain" },
    title: {
        textAlign: "center", fontSize: 34,
        paddingVertical: 12,
        color: secondaryColor,
        fontFamily: "PoppinsBold"
    },
    description: {
        textAlign:
            "center", paddingVertical: 8,
        marginBottom: 10,
        paddingHorizontal: 20,
        fontSize: 18,
        fontFamily: "PoppinsMedium"
    },
    button: {
        marginTop: 30
    }
});
export default OnBoardingItem

