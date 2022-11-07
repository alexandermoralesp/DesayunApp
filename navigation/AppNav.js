import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext } from 'react';
import { AuthContext } from "../context/AuthContext";
import HomeScreen from "../screens/HomeScreen";
import LoadingScreen from "../screens/LoadingScreen";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import SettingsScreen from "../screens/SettingsScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
const Stack = createNativeStackNavigator();

const AppNav = () => {
    const { isLoading, userToken, isFirst } = useContext(AuthContext);

    if (isLoading) {
        return <LoadingScreen />
    }
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {
                userToken ?
                    <>
                        <Stack.Group>
                            <Stack.Screen name="Settings" component={SettingsScreen}/>
                            <Stack.Screen name="Home" component={HomeScreen} />
                        </Stack.Group>
                    </> :
                    <>
                        <Stack.Group screenOptions={{ presentation: 'modal' }}>
                            {isFirst ? <Stack.Screen name="OnBoarding" component={OnBoardingScreen} /> : null}
                            <Stack.Screen name="SignIn" component={SignInScreen} />
                            <Stack.Screen name="SignUp" component={SignUpScreen} />
                        </Stack.Group>
                    </>
            }
        </Stack.Navigator>
    )
}

export default AppNav