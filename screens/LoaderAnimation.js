import {View, Text} from 'react-native';
import React from 'react';
import {View as MotiView} from 'moti';

const size = 60;

export default function LoaderAnimation() {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'white',
      }}>
      <MotiView
        style={{
          height: size,
          width: size,
          borderRadius: size / 2,
          borderWidth: size / 10,
          borderColor: 'blue',
          alignItems: 'center', justifyContent: 'center',
          
        }}
        from={{height: size, width: size, borderRadius: size / 2, borderWidth: 0, borderColor: 'blue',}}
        animate={{
          height: size + 20,
          width: size + 20,
          borderRadius: size / 2 + 20, borderWidth: size / 10,
          borderColor: 'green', 
        }}
        transition = {{type: 'timing', duration: 2000, loop: true}}
        >
            <Text style={{fontSize: 12, color: 'blue'}}>Loading</Text>
        </MotiView>
    </View>
  );
}
