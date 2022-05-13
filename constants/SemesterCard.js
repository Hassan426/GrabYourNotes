import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {height, width} from 'react-native-dimension';

const SemesterCard = ({semester, image, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        marginHorizontal: width(4),
        backgroundColor: 'white',
        marginTop: height(2),
      }}
      onPress={onPress}>
      <View
        style={{
          height: height(40),
          backgroundColor: 'red',
          elevation: 7,
          //   borderRadius: 20,
          //   overflow: 'hidden',
        }}>
        <Image source={image} style={{width: '100%', height: '100%'}} />
      </View>
      <View
        style={{
          height: height(10),
          backgroundColor: '#BA963A',
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 7,
          //   borderRadius: 10,
        }}>
        <Text style={{fontSize: 35, fontWeight: 'bold', color: 'white'}}>
          {semester}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SemesterCard;

const styles = StyleSheet.create({});
