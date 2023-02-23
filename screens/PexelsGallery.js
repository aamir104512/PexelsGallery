import {
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import LoaderAnimation from './LoaderAnimation';

const API_KEY = `YOUR_API_KEY`;
const API_URL = `https://api.pexels.com/v1/search?query=nature&orientation=portrait&size=original&per_page=50`;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const IMAGE_SIZE = 80;

export default function PexelsGallery() {
  const [images, setImages] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const topRef = useRef();
  const thumbRef = useRef();

  const FetchImages = async () => {
    const data = await fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    });

    const {photos} = await data.json();
    setImages(photos);
    // photos.map(item => console.log(item.src.portrait));
  };

  useEffect(() => {
    FetchImages();
    console.log('useEffect ran');
  }, []);

  const scrollToActiveIndex = index => {
    setActiveIndex(index);
    topRef?.current?.scrollToOffset({
      offset: index * windowWidth,
      animated: true,
    });

    if (index * (IMAGE_SIZE + 10) - IMAGE_SIZE / 2 > windowWidth / 2) {
      thumbRef?.current?.scrollToOffset({
        offset: index * (IMAGE_SIZE + 10) - windowWidth / 2 + IMAGE_SIZE / 2,
        animated: true,
      });
    } else {
      thumbRef?.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  };

  const renderImages = ({item}) => {
    return (
      <View style={{width: windowWidth, height: windowHeight}}>
        <Image source={{uri: item.src.portrait}} style={{flex: 1}} />
      </View>
    );
  };

  const renderSmallImages = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => scrollToActiveIndex(index)}>
        <Image
          source={{uri: item.src.portrait}}
          style={{
            width: IMAGE_SIZE,
            height: IMAGE_SIZE,
            borderRadius: 12,
            marginRight: 10,
            borderWidth: 2,
            borderColor: activeIndex === index ? 'white' : 'transparent',
          }}
        />
      </TouchableOpacity>
    );
  };

  if (!images) {
    return <LoaderAnimation />;
  } else {
  }
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={images}
        ref={topRef}
        keyExtractor={item => item.id.toString()}
        renderItem={renderImages}
        horizontal
        onMomentumScrollEnd={event => {
          scrollToActiveIndex(
            Math.floor(event.nativeEvent.contentOffset.x / windowWidth),
          );
        }}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />

      <FlatList
        data={images}
        ref={thumbRef}
        keyExtractor={item => item.id.toString()}
        renderItem={renderSmallImages}
        horizontal
        contentContainerStyle={{paddingHorizontal: 10}}
        style={{position: 'absolute', bottom: 50}}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
