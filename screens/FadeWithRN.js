import {View, Text, Animated, TouchableOpacity, Dimensions} from 'react-native';
import React, {useRef, useEffect} from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function FadeWithRN() {
  const value = useRef(new Animated.Value(0)).current;


  const AnimateFunction = () => {
    Animated.sequence([
      Animated.timing(
        value,
        {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true
        }
      ),
      Animated.timing(
        value,
        {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true
        }
      )
    ]).start(() => {
      AnimateFunction();
      // setTimeout(() => {
      //   AnimateFunction();
      // }, 3000);
      
    });
  };


  useEffect(() => {
    AnimateFunction()
    console.log('UseEffect Ran...')
    return () => {
      value.stopAnimation();
    };
  }, [])
  
  return (
    <View style={{backgroundColor: 'white', flex: 1, justifyContent: 'center'}}>
      <Animated.View
        style={{opacity: value}}>
        <View style={{alignItems: 'center',}}>
          <View
            style={{
              height: 40,
              width: windowWidth / 1.2,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'powderblue',
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 14}}>Animating...</Text>
          </View>
        </View>
      </Animated.View>

          {/* <TouchableOpacity onPress={AnimateFunction} style={{alignItems: 'center'}}>
            <Text style={{color: 'green', fontSize: 18, marginTop: 10}}>
              Fade In
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={AnimateFunction2} style={{alignItems: 'center'}}>
            <Text style={{color: 'green', fontSize: 18, marginTop: 10}}>
              Fade Out
            </Text>
          </TouchableOpacity> */}
    </View>
  );
}
