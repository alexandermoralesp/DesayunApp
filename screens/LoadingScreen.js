import LottieView from 'lottie-react-native';
import React, { useCallback, useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import PrimaryButton from '../components/PrimaryButton';

const primaryColor = "#FFFEFE";
const UTEC_VENTURES = "https://static.younoodle.com/pictures/d5/3e/9a/parent_53e281b326ab56_27472061.jpg";

const LoadingScreen = ({navigation}) => {
    const [fontsLoaded] = useFonts({
        'MochiyPopOne': require('../assets/fonts/mochipopone/MochiyPopOne-Regular.ttf'),
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
    if (!fontsLoaded) {
        return <Text>Font not loading</Text>;
    }
    return (
        <View style={styles.body} onLayout={onLayoutRootView}>
            <View style={styles.animationContainer}>
                <LottieView
                    autoPlay
                    style={styles.lottieContainer}
                    source={require('../assets/lotties/loading.json')}
                />
                <Text style={styles.titleStyle}>DesayunApp</Text>
            </View>
            <View style={styles.titleContainer}>
                <View style={styles.backedContainer}>
                    <Text style={styles.backedTitle}>Backed by</Text>
                    <Image source={{ uri: UTEC_VENTURES }} style={{ width: 100, height: 40 }} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: primaryColor,
        height: "100%"
    },
    animationContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    backedTitle: {
        fontWeight: "600",
        color: "#676667"
    },
    backedContainer: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 6
    },
    lottieContainer: {
        width: 200,
        height: 200,
        backgroundColor: primaryColor,
        paddingTop: 40,
        marginBottom: 60
    },
    titleContainer: {
        paddingBottom: 60,
        alignItems: "center",
        backgroundColor: primaryColor
    },
    titleStyle: {
        fontSize: 26,
        color: "#45949C",
        fontFamily: "MochiyPopOne"
    }
});

export default LoadingScreen