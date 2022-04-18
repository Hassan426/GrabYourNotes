import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import Button2 from '../../components/Button2';

const BookListofFifthSemester = ({navigation}) => {
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
          title={'CIT-501   Computer Network 3(2-1)'}
          onPress={() => navigation.navigate('PDF21')}
        />
        <Button2
          title={'CIT-503   Internet Architecture & Management 3(2-1)'}
          onPress={() => navigation.navigate('PDF22')}
        />
        <Button2
          title={'CIT-505   Database and Mangement 3(2-1)'}
          onPress={() => navigation.navigate('PDF23')}
        />
        <Button2
          title={'BBA-511   Information system Audit 3(3-0)'}
          onPress={() => navigation.navigate('PDF24')}
        />
        <Button2
          title={'CIT-507   Object Oriented Analysis & 3(3-0)'}
          onPress={() => navigation.navigate('PDF25')}
        />
      </View>
    </ImageBackground>
  );
};

export default BookListofFifthSemester;

const styles = StyleSheet.create({});
