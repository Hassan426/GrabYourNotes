import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  SplashScreen,
  Info1,
  Info2,
  Info3,
  Home,
  Listofsemester,
} from '../screen';
import {
  BookListofFirstSemester,
  FirstSemesterHome,
  PDF1,
  PDF2,
  PDF3,
  PDF4,
  PDF5,
} from '../screen/FirstSemester';
import {
  BookListofSecondSemester,
  SecondSemesterHome,
  PDF6,
  PDF7,
  PDF8,
  PDF9,
  PDF10,
} from '../screen/SecondSemester';
import {
  BookListofThirdSemester,
  ThirdSemesterHome,
  PDF11,
  PDF12,
  PDF13,
  PDF14,
  PDF15,
} from '../screen/ThirdSemester';
import {
  BookListofFourthSemester,
  FourthSemesterHome,
  PDF16,
  PDF17,
  PDF18,
  PDF19,
  PDF20,
} from '../screen/FouthSemester';
import {
  BookListofFifthSemester,
  FifthSemesterHome,
  PDF21,
  PDF22,
  PDF23,
  PDF24,
  PDF25,
} from '../screen/Fifth';
import {
  BookListofSixthSemester,
  SixthSemesterHome,
  PDF26,
  PDF27,
  PDF28,
  PDF29,
  PDF30,
} from '../screen/Sixth';
import {
  BookListofSeventhSemester,
  SeventhSemesterHome,
  PDF31,
  PDF32,
  PDF33,
  PDF34,
  PDF35,
} from '../screen/SeventhSemester';
import {
  BookListofEightSemester,
  EightSemesterHome,
  PDF36,
  PDF37,
  PDF38,
  PDF39,
  PDF40,
} from '../screen/EightSemester';
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
          name="Info1"
          component={Info1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Info2"
          component={Info2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Info3"
          component={Info3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="List"
          component={Listofsemester}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FirstSemesterHome"
          component={FirstSemesterHome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FirstSemesterList"
          component={BookListofFirstSemester}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF1"
          component={PDF1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF2"
          component={PDF2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF3"
          component={PDF3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF4"
          component={PDF4}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF5"
          component={PDF5}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SecondSemesterHome"
          component={SecondSemesterHome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SecondSemesterList"
          component={BookListofSecondSemester}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF6"
          component={PDF6}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF7"
          component={PDF7}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF8"
          component={PDF8}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF9"
          component={PDF9}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF10"
          component={PDF10}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ThirdSemesterHome"
          component={ThirdSemesterHome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ThirdSemesterList"
          component={BookListofThirdSemester}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF11"
          component={PDF11}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF12"
          component={PDF12}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF13"
          component={PDF13}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF14"
          component={PDF14}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF15"
          component={PDF15}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FourthSemesterHome"
          component={FourthSemesterHome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FourthSemesterList"
          component={BookListofFourthSemester}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF16"
          component={PDF16}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF17"
          component={PDF17}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF18"
          component={PDF18}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF19"
          component={PDF19}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF20"
          component={PDF20}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FifthSemesterHome"
          component={FifthSemesterHome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FifthSemesterList"
          component={BookListofFifthSemester}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF21"
          component={PDF21}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF22"
          component={PDF22}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF23"
          component={PDF23}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF24"
          component={PDF24}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF25"
          component={PDF25}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SixthSemesterHome"
          component={SixthSemesterHome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SixthSemesterList"
          component={BookListofSixthSemester}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF26"
          component={PDF26}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF27"
          component={PDF27}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF28"
          component={PDF28}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF29"
          component={PDF29}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF30"
          component={PDF30}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SeventhSemesterHome"
          component={SeventhSemesterHome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SeventhSemesterList"
          component={BookListofSeventhSemester}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF31"
          component={PDF31}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF32"
          component={PDF32}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF33"
          component={PDF33}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF34"
          component={PDF34}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF35"
          component={PDF35}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EightthSemesterHome"
          component={EightSemesterHome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EighthSemesterList"
          component={BookListofEightSemester}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF36"
          component={PDF36}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF37"
          component={PDF37}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF38"
          component={PDF38}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF39"
          component={PDF39}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PDF40"
          component={PDF40}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
