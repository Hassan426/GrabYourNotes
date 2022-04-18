import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {height, width} from 'react-native-dimension';
import Colors from '../constants/Colors';

export default function CateGories({title, onPress}) {
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height: height(10),
        backgroundColor: Colors.gray,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        shadowColor: 'black',
        // opacity: 0.9,
        marginVertical: 8,
      }}
      onPress={onPress}>
      <Text style={{fontSize: 22, fontWeight: '900', color: Colors.white}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
