import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import Button1 from '../components/Button1';
import CateGories from '../components/CateGories';
import Data from '../DummyData/DummyData';
import SemesterCard from '../constants/SemesterCard';
import {height} from 'react-native-dimension';

const HomeScreen = ({navigation}) => {
  return (
    // <ImageBackground
    //   style={{width: '100%', height: '100%'}}
    //   source={{
    //     uri: 'https://images.pexels.com/photos/1148399/pexels-photo-1148399.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    //   }}>
    <View>
      <FlatList
        data={Data}
        renderItem={({item}) => (
          <View>
            <SemesterCard
              semester={item.title}
              image={item.image}
              onPress={() =>
                navigation.navigate('Shome', {
                  Books: item.Books,
                  booktitle: item.booktitle,
                })
              }
            />
          </View>
        )}
      />
      {/* </ImageBackground> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
