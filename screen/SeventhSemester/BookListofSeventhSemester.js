import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import Button2 from '../../components/Button2';

const BookListofSeventhSemester = ({navigation}) => {
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
          title={'CIT-601   Human Computer Interaction 3(3-0)'}
          onPress={() => navigation.navigate('PDF31')}
        />
        <Button2
          title={'CIT-603   IT Project Management 3(3-0)'}
          onPress={() => navigation.navigate('PDF32')}
        />
        <Button2
          title={'CIT-605   Network Security 3(3-0)'}
          onPress={() => navigation.navigate('PDF33')}
        />
        <Button2
          title={'CIT-607   Cloud Computing 3(3-0)'}
          onPress={() => navigation.navigate('PDF34')}
        />
      </View>
    </ImageBackground>
  );
};

export default BookListofSeventhSemester;

const styles = StyleSheet.create({});
