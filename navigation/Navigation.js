import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  SplashScreen,
  HomeScreen,
  Listofsemester,
  Shome,
  Show,
  SwipeAbleScreen,
} from '../screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function Navigation() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="List"
          component={Listofsemester}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Shome"
          component={Shome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="show"
          component={Show}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Swipe"
          component={SwipeAbleScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
