import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import CateGories from '../components/CateGories';
import * as openAnything from 'react-native-openanything';

const Shome = ({route, params, navigation}) => {
  const {Books, booktitle} = route.params;
  console.log('aaaaaaaaaaa', Books);
  return (
    <View>
      <FlatList
        data={Books}
        renderItem={({item}) => (
          <View>
            <CateGories
              title={item.booktitle}
              onPress={() => navigation.navigate('show', {url: item.url})}
              // onPress={() =>
              //   openAnything.Pdf(
              //     'https://educations4u.com/wp-content/uploads/2021/09/Introduction-to-STATISTICAL-THEORY-BSc-Part-1-By-Prof-Sher-Muhammad-Choudhry-and-Prof.-Dr.-Shahid-Kamal.pdf',
              //   )
              // }
            />
          </View>
        )}
      />
    </View>
  );
};

export default Shome;

const styles = StyleSheet.create({});
