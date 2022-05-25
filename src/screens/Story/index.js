import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const Story = ({route}) => {
  const url = route.params.url;
  const title = route.params.title;

  return (
    <View style={styles.storyWrapper}>
      <Image source={{uri: url}} style={styles.storyImage} />
      <Text>{title}</Text>
    </View>
  );
};

export default Story;
