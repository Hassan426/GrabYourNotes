import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import Button2 from '../../components/Button2';

const BookListofThirdSemester = ({navigation}) => {
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
          title={'CSI-302   Object Oriented programming 4(3-1)'}
          onPress={() => navigation.navigate('PDF6')}
        />
        <Button2
          title={'CSI-304   Descreate Structures 3(3-0)'}
          onPress={() => navigation.navigate('PDF7')}
        />
        <Button2
          title={'PST-321   Pakistan Studies 2(2-0)'}
          onPress={() => navigation.navigate('PDF8')}
        />
        <Button2
          title={'ENG-322   English Comprehesion & Mangement 3(3-0)'}
          onPress={() => navigation.navigate('PDF9')}
        />
        <Button2
          title={'PHY-312   Basic Eelectronics  3(2-1)'}
          onPress={() => navigation.navigate('PDF10')}
        />
      </View>
    </ImageBackground>
  );
};

export default BookListofThirdSemester;

const styles = StyleSheet.create({});
