import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigation from './navigation/Navigation';

const App = () => {
  return <Navigation />;
};

export default App;

const styles = StyleSheet.create({});
// import {StyleSheet, Text, View} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const App = () => {
//   const [uid, setUid] = useState();

//   const storeData = async () => {
//     try {
//       await AsyncStorage.setItem('uid', 'value');
//       // setUid(uid);
//     } catch (error) {}
//   };

//   const reterieve = async () => {
//     try {
//       const value = await AsyncStorage.getItem('uid');
//       if (value !== null) {
//         // We have data!!
//         console.log(value);
//       }
//     } catch (error) {
//       // Error retrieving data
//     }
//   };
//   useEffect(() => {
//     storeData();
//   }, []);
//   useEffect(() => {
//     reterieve();
//   }, []);
//   console.log('uid', uid);
//   return (
//     <View>
//       <Text>Apps</Text>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});
