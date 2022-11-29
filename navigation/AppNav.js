import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext } from 'react';
import { AuthContext } from "../context/AuthContext";
import HomeScreen from "../screens/HomeScreen";
import LoadingScreen from "../screens/LoadingScreen";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import SettingsScreen from "../screens/SettingsScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import OrdersScreen from "../screens/OrdersScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNav = () => {
    const { isLoading, userToken, isFirst } = useContext(AuthContext);

    if (isLoading) {
        return <LoadingScreen />
    }
    return (
        <>
            {
                userToken ?
                    <>
                        <Tab.Navigator screenOptions={
                            ({ route }) => ({
                                tabBarIcon: ({ focused, color, size }) => {
                                  let iconName;
                                  if (route.name === 'Home') {
                                    iconName = focused
                                      ? 'ios-information-circle'
                                      : 'ios-information-circle-outline';
                                  } else if (route.name === 'Settings') {
                                    iconName = focused ? 'ios-list' : 'ios-list-outline';
                                  }
                                  return <Ionicons name={iconName} size={size} color={color} />;
                                },
                                tabBarActiveTintColor: 'tomato',
                                tabBarInactiveTintColor: 'gray',
                              })
                        }>
                            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false}}/>
                            <Tab.Screen name="Orders" component={OrdersScreen} />
                            <Tab.Screen name="Settings" component={SettingsScreen} />
                        </Tab.Navigator>
                    </> :
                    <>
                        <Stack.Navigator screenOptions={{ headerShown: false }}>
                            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                                {isFirst ? <Stack.Screen name="OnBoarding" component={OnBoardingScreen} /> : null}
                                <Stack.Screen name="SignIn" component={SignInScreen} />
                                <Stack.Screen name="SignUp" component={SignUpScreen} />
                            </Stack.Group>
                        </Stack.Navigator>
                    </>
            }
        </>
    )
}

export default AppNav