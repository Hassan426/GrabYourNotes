import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import Button1 from '../components/Button1';
import CateGories from '../components/CateGories';

const Home = ({navigation}) => {
  return (
    <ImageBackground
      style={{width: '100%', height: '100%'}}
      source={{
        uri: 'https://images.pexels.com/photos/1148399/pexels-photo-1148399.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      }}>
      <ScrollView style={{margin: 16}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 80, fontWeight: 'bold', color: Colors.white}}>
            BSIT
          </Text>
        </View>
        <CateGories
          title="FIRST SEMESTER"
          onPress={() => navigation.navigate('FirstSemesterHome')}
        />
        <CateGories
          title="SECOND SEMESTER"
          onPress={() => navigation.navigate('SecondSemesterHome')}
        />
        <CateGories
          title="THIRD SEMESTER"
          onPress={() => navigation.navigate('ThirdSemesterHome')}
        />
        <CateGories
          title="FOURTH SEMESTER"
          onPress={() => navigation.navigate('FourthSemesterHome')}
        />
        <CateGories
          title="FIFTH SEMESTER"
          onPress={() => navigation.navigate('FifthSemesterHome')}
        />
        <CateGories
          title="SIXTH SEMESTER"
          onPress={() => navigation.navigate('SixthSemesterHome')}
        />
        <CateGories
          title="SEVENTH SEMESTER"
          onPress={() => navigation.navigate('SeventhSemesterList')}
        />
        <CateGories
          title="EIGHTH SEMESTER"
          onPress={() => navigation.navigate('EighthSemesterList')}
        />

        {/* <View
        style={{
          width: 300,
          height: 50,
          backgroundColor: 'red',
          elevation: 5,
        }}></View> */}
      </ScrollView>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({});
