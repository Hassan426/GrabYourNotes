import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import Button2 from '../../components/Button2';

const BookListofFourthSemester = ({navigation}) => {
  return (
    <ImageBackground
      style={{width: '100%', height: '100%'}}
      source={{
        uri: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      }}>
      <View
        style={{
          flex: 1,
          margin: 20,
          justifyContent: 'center',
          alignItems: 'center',
          opacity: 0.9,
        }}>
        <Button2
          title={'CSI-301   Operating System  4(3-1)'}
          onPress={() => navigation.navigate('PDF16')}
        />
        <Button2
          title={'CIT-402  Information system 3(2-1)'}
          onPress={() => navigation.navigate('PDF17')}
        />
        <Button2
          title={'CIT-404   Web system & Technology 3(2-1)'}
          onPress={() => navigation.navigate('PDF18')}
        />
        <Button2
          title={'CSI-404   Computer communication & Network 3(3-0)'}
          onPress={() => navigation.navigate('PDF19')}
        />
        <Button2
          title={'SWE-401   Intro. to Software Engineering  3(3-0)'}
          onPress={() => navigation.navigate('PDF20')}
        />
      </View>
    </ImageBackground>
  );
};

export default BookListofFourthSemester;

const styles = StyleSheet.create({});
