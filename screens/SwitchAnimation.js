import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import {MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';

const size = 100;
const colors = {
  active: '#2C2C2C',
  inactive: '#DCDCDC',
};

export default function SwitchAnimation() {
  const [isActive, setIsActive] = useState(false);

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#f0f0f0',
      }}>
      <Pressable
        style={{alignItems: 'center', justifyContent: 'center'}}
        onPress={() => setIsActive(!isActive)}>
        <MotiView
          style={{
            width: size * 1.5,
            height: size * 0.4,
            borderRadius: 20,
            backgroundColor: colors.inactive,
            position: 'absolute',
            justifyContent: 'center',
          }}
          animate={{
            backgroundColor: isActive ? colors.inactive : colors.active,
          }}
          transition={{
            type: 'timing',
            duration: 1000,
            easing: Easing.inOut(Easing.ease),
          }}>
          <MotiView
            style={{
              width: size * 0.6,
              height: size * 0.6,
              borderRadius: (size * 0.6) / 2,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            animate={{translateX: isActive ? 0 : size}}
            transition={{
              type: 'timing',
              duration: 1000,
              easing: Easing.inOut(Easing.ease),
            }}>
            <MotiView
              style={{
                width: size * 0.45,
                height: size * 0.45,
                borderWidth: size * 0.05,
                borderColor: colors.inactive,
                borderRadius: (size * 0.6) / 2,
              }}
              animate={{
                borderColor: isActive ? colors.inactive : colors.active,
                width: isActive ? size * 0.45 : 0,
              }}
              transition={{
                type: 'timing',
                duration: 1000,
                easing: Easing.inOut(Easing.ease),
              }}
            />
          </MotiView>
        </MotiView>
      </Pressable>
    </View>
  );
}
