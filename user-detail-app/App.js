import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen/homeScreen';
import ListScreen from './screens/ListScreen/listScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home' , headerShown: false}} />
        <Stack.Screen name="ListScreen" component={ListScreen} options={{ title: 'List of User' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
