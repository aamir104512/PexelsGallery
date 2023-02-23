import { View, Text } from 'react-native'
import React from 'react'
import FadeWithRN from './screens/FadeWithRN'
import MotiAnimations from './screens/MotiAnimations'
import WavePhone from './screens/WavePhone'
import LoaderAnimation from './screens/LoaderAnimation'
import SwitchAnimation from './screens/SwitchAnimation'
import PexelsGallery from './screens/PexelsGallery'

export default function App() {
  return (
    <View style={{flex: 1}}>
      {/* <FadeWithRN /> */}
      {/* <MotiAnimations /> */}
      {/* <WavePhone /> */}
      {/* <LoaderAnimation /> */}
      {/* <SwitchAnimation /> */}
      <PexelsGallery />
    </View>
  )
}