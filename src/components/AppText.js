import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import {Children} from 'react/cjs/react.production.min';

const Apptext = ({children}) => {
  return (
    <View>
      <Text style={{fontSize: 32, fontWeight: 'bold', color: Colors.white}}>
        {children}
      </Text>
    </View>
  );
};

export default Apptext;

const styles = StyleSheet.create({});
