import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import Button2 from '../../components/Button2';

const BookListofSixthSemester = ({navigation}) => {
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
          title={'CIT-502   Multimedia System & Design 3(2-1)'}
          onPress={() => navigation.navigate('PDF26')}
        />
        <Button2
          title={'CIT-504   Technology System 3(3-0)'}
          onPress={() => navigation.navigate('PDF27')}
        />
        <Button2
          title={'CIT-506   System Integration & Architecture 3(3-0)'}
          onPress={() => navigation.navigate('PDF28')}
        />
        <Button2
          title={'CIT-508   System & Network Administration 3(3-0)'}
          onPress={() => navigation.navigate('PDF29')}
        />
      </View>
    </ImageBackground>
  );
};

export default BookListofSixthSemester;

const styles = StyleSheet.create({});
