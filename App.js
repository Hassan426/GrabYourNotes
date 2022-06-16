import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useId, useState} from 'react';
import Navigation from './src/navigation/Navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = React.createContext({
  userId: null,
  setUserId: () => null,
});
const App = () => {
  console.log('iddddd', userId);
  const [userId, setUserId] = useState(null);

  const retrieveData = async () => {
    const userId = await AsyncStorage.getItem('UserId');
    if (userId) setUserId(userId);
  };
  const setDataLocally = userId => {
    if (userId == null || userId == undefined) {
      AsyncStorage.removeItem('UserId');
    } else AsyncStorage.setItem('UserId', userId);
  };

  useEffect(() => {
    retrieveData();
  }, []);

  useEffect(() => {
    setDataLocally(userId);
  }, [userId]);

  return (
    <AuthContext.Provider value={{userId, setUserId}}>
      <Navigation />
    </AuthContext.Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
