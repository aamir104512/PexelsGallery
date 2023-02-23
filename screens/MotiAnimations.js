import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {View as MotiView, useAnimationState, AnimatePresence} from 'moti';

export default function MotiAnimations() {

    const [pressed, setPressed] = useState(false)
    const fade = useAnimationState({
        from: {
            // opacity: 0,
            // translateX: 0,
            rotate: '0deg'
        },
        to: {
            // opacity:  1,
            // translateX: [100, 0, -100, 0],
            rotate: ['45deg', '90deg', '135deg', '180deg', '225deg', '270deg', '315deg', '360deg', '0deg'],
            
        }
    })
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <AnimatePresence exitBeforeEnter>

            {pressed && 
            <MotiView  
            key = 'yellow'
            from = {{opacity: 0, scale: 0.9}}
            animate = {{opacity: 1, scale: 1.2}}
            exit = {{opacity: 0, scale: 0.9}}
            // from={{translateX: 0}}
            // animate={{translateX: pressed ? [100, 0, -100, 0] : 0}}
            transition = {{ type: 'timing',}}
            >

              <TouchableOpacity
              style={{
                height: 250,
                width: 250,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'yellow',
              }} 
              onPress={()=> setPressed(!pressed)}>

                <Text style={{color: 'black', fontSize: 20}}>Aamir</Text>
              </TouchableOpacity>
              </MotiView>}

              {
                !pressed &&
                <MotiView  
                key = 'powderblue'
                from = {{opacity: 0, scale: 0.9}}
                animate = {{opacity: 1, scale: 1.2}}
                exit = {{opacity: 0, scale: 0.9}}
                // from={{translateX: 0}}
                // animate={{translateX: pressed ? [100, 0, -100, 0] : 0}}
                transition = {{ type: 'timing',}}
                >

                  <TouchableOpacity
                  style={{
                    height: 250,
                    width: 250,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'powderblue',
                  }} onPress={()=> setPressed(!pressed)}>

                    <Text style={{color: 'black', fontSize: 20}}>Aamir</Text>
                  </TouchableOpacity>
                  </MotiView>
              }
      

          
        </AnimatePresence>

        {/* <TouchableOpacity onPress={()=> setPressed(!pressed)}>
            <Text style={{fontSize: 20, marginTop: 20}}>Animate....</Text>
        </TouchableOpacity> */}
    </View>
  );
}
