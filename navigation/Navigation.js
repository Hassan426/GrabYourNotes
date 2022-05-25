import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  SplashScreen,
  SemesterHomeScreen,
  SemesterHomeScreen1,
  BookHomeScreen,
  BookHomeScreen1,
  PDFScreen,
  SwipeAbleScreen,
  HomeScreen,
} from '../screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Colors from '../constants/Colors';
import OfflineNotice from '../components/OfflineNotice';

export default function Navigation() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <OfflineNotice />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: Colors.Magenta},
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SemesterHome" component={SemesterHomeScreen} />
          <Stack.Screen name="SemesterHome1" component={SemesterHomeScreen1} />
          <Stack.Screen name="Bookhome" component={BookHomeScreen} />
          <Stack.Screen name="Bookhome1" component={BookHomeScreen1} />

          <Stack.Screen
            name="PDF"
            component={PDFScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Swipe"
            component={SwipeAbleScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
