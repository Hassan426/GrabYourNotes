import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  BookHomeScreen,
  BookHomeScreen1,
  HomeScreen,
  PDFScreen,
  SemesterHomeScreen,
  SemesterHomeScreen1,
} from '../screen/appflow';
import {
  SplashScreen,
  SignInScreen,
  SignUpScreen,
  useAuth,
} from '../screen/authflow';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Colors from '../constants/Colors';
import OfflineNotice from '../components/OfflineNotice';

export default function Navigation() {
  const MainStack = createNativeStackNavigator();
  const AuthStack = createNativeStackNavigator();

  const {userId} = useAuth();

  const AuthStackNavigator = () => {
    return (
      <AuthStack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: Colors.Magenta},
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <AuthStack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
      </AuthStack.Navigator>
    );
  };
  const MainStackNavigator = () => {
    return (
      <MainStack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: Colors.Magenta},
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <MainStack.Screen name="Home" component={HomeScreen} />
        <MainStack.Screen name="SemesterHome" component={SemesterHomeScreen} />
        <MainStack.Screen
          name="SemesterHome1"
          component={SemesterHomeScreen1}
        />
        <MainStack.Screen name="Bookhome" component={BookHomeScreen} />
        <MainStack.Screen name="Bookhome1" component={BookHomeScreen1} />

        <MainStack.Screen
          name="PDF"
          component={PDFScreen}
          options={{headerShown: false}}
        />
      </MainStack.Navigator>
    );
  };
  return (
    <>
      <OfflineNotice />
      <NavigationContainer>
        {userId ? MainStackNavigator() : AuthStackNavigator()}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
