import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import Pdf from 'react-native-pdf';
import {ViewPropTypes} from 'deprecated-react-native-prop-types';

const PDFExample = () => {
  const source = {
    uri: 'https://www.vssut.ac.in/lecture_notes/lecture1428551142.pdf',
    cache: true,
  };
  //const source = require('./test.pdf');  // ios only
  //const source = {uri:'bundle-assets://test.pdf' };
  //const source = {uri:'file:///sdcard/test.pdf'};
  //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
  //const source = {uri:"content://com.example.blobs/xxxxxxxx-...?offset=0&size=xxx"};
  //const source = {uri:"blob:xxxxxxxx-...?offset=0&size=xxx"};

  return (
    <View style={styles.container}>
      <Pdf
        source={source}
        onLoadComplete={(numberOfPages, filePath) => {
          //   console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          //   console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
};
export default PDFExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pdf: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
