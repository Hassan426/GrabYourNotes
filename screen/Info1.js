import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import Button1 from '../components/Button1';
import Colors from '../constants/Colors';

const Info1 = ({navigation}) => {
  return (
    <ImageBackground
      style={{width: '100%', height: '100%'}}
      source={{
        uri: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZm9ybWF0aW9uJTIwdGVjaG5vbG9neXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
      }}>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View
          style={{
            width: '50%',
            marginLeft: 160,
          }}>
          <Button1
            title={'Next'}
            onPress={() => navigation.navigate('Info2')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
            marginLeft: 40,
          }}>
          <View style={styles.dot}></View>
          <View style={styles.dot1}></View>
          <View style={styles.dot2}></View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Info1;

const styles = StyleSheet.create({
  dot: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: Colors.white,
    marginBottom: 20,
    marginLeft: 200,
  },
  dot1: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: Colors.white,
    marginBottom: 20,
    marginLeft: 10,
  },
  dot2: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: Colors.white,
    marginBottom: 20,
    marginLeft: 10,
  },
});
