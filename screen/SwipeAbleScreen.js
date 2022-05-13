import React from 'react';
import {View} from 'react-native';
import SwipeableParallaxCarousel from 'react-native-swipeable-parallax-carousel';

const datacarousel = [
  {
    id: 339964,
    title: 'Valerian and the City of a Thousand Planets',
    imagePath:
      'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZm9ybWF0aW9uJTIwdGVjaG5vbG9neXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 315635,
    imagePath:
      'https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGluZm9ybWF0aW9uJTIwdGVjaG5vbG9neXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
  },

  {
    id: 339403,
    title: 'Baby Driver',
    subtitle: 'More than just a trend',
    imagePath:
      'https://images.unsplash.com/photo-1584291527905-f930791fb1ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGluZm9ybWF0aW9uJTIwdGVjaG5vbG9neXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
  },
];
const SwipeAbleScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}} useNativeDriver={true}>
      <SwipeableParallaxCarousel
        data={datacarousel}
        // useNativeDriver={true}
        height={'100%'}
        titleColor={'white'}
        navigation={true}
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};
<SwipeableParallaxCarousel data={datacarousel} />;

export default SwipeAbleScreen;
