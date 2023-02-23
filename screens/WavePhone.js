import {View, Text, Image} from 'react-native';
import React from 'react';
import {View as MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';

export default function WavePhone() {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: '#6E01EF',
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {[...Array(3).keys()].map(index => {
          return (
            <MotiView
              key={index}
              style={{
                position: 'absolute',
                height: 100,
                width: 100,
                backgroundColor: '#6E01EF',
                borderRadius: 50,
              }}
              from={{opacity: 0.7, scale: 1}}
              animate={{opacity: 0, scale: 4}}
              transition={{
                type: 'timing',
                duration: 2000,
                loop: true,
                easing: Easing.out(Easing.ease),
                delay: index * 400,
                repeatReverse: false
              }}
            />
          );
        })}

        <Image
          source={require('../assets/phone.png')}
          resizeMode="contain"
          style={{height: 50, width: 50, tintColor: 'white'}}
        />
      </View>
    </View>
  );
}
