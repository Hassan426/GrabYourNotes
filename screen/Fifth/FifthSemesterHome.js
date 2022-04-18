import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import CateGories from '../../components/CateGories';
import Button2 from '../../components/Button2';
import Apptext from '../../components/Apptext';

const FifthSemesterHome = ({navigation}) => {
  return (
    <ImageBackground
      style={{width: '100%', height: '100%'}}
      fadeDuration={2}
      source={{
        uri: 'https://images.unsplash.com/photo-1543497415-75c0a27177c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          marginHorizontal: 20,
        }}>
        <Apptext>Fifth Semester</Apptext>

        <Button2
          title="BOOK"
          onPress={() => navigation.navigate('FifthSemesterList')}
        />
        <Button2 title="NOTES" />
        <Button2 title="VIDEO LECTURES" />
      </View>
    </ImageBackground>
  );
};

export default FifthSemesterHome;

const styles = StyleSheet.create({});
