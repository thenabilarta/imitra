import {View, Text} from 'react-native';
import React, {createRef} from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';

const StoryPlaceHolder = () => {
  const storyRef = createRef();

  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

  return (
    <View style={styles.storyContainerPlaceHolder}>
      <View style={styles.storyPlaceHolder}>
        <ShimmerPlaceHolder
          ref={storyRef}
          LinearGradient={LinearGradient}
          style={{height: '100%', width: '100%'}}
        />
      </View>
      <View style={styles.storyPlaceHolder}>
        <ShimmerPlaceHolder
          ref={storyRef}
          LinearGradient={LinearGradient}
          style={{height: '100%', width: '100%'}}
        />
      </View>
      <View style={styles.storyPlaceHolder}>
        <ShimmerPlaceHolder
          ref={storyRef}
          LinearGradient={LinearGradient}
          style={{height: '100%', width: '100%'}}
        />
      </View>
      <View style={styles.storyPlaceHolder}>
        <ShimmerPlaceHolder
          ref={storyRef}
          LinearGradient={LinearGradient}
          style={{height: '100%', width: '100%'}}
        />
      </View>
    </View>
  );
};

export default StoryPlaceHolder;
