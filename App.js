/* Navigation */
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import LoadingScreen from "./screens/LoadingScreen";
import OnBoardingScreen from "./screens/OnBoardingScreen";

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Group>
          <RootStack.Screen name="Home" component={HomeScreen}/>
        </RootStack.Group>
        <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen name="Loading" component={LoadingScreen} />
          <RootStack.Screen name="OnBoarding" component={OnBoardingScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>

  );
}
