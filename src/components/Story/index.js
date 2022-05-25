import {View, TouchableOpacity, FlatList, Image} from 'react-native';
import React from 'react';
import {STORY} from '../../constants/routeNames';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import StoryPlaceHolder from '../PlaceHolder/Story';

const Story = storyData => {
  const navigation = useNavigation();

  const renderStory = ({item}) => (
    <OneStory
      id={item.id}
      thumbnailUrl={item.thumbnailUrl}
      url={item.url}
      title={item.title}
    />
  );

  const OneStory = ({thumbnailUrl, url, title}) => {
    return (
      <TouchableOpacity
        style={styles.story}
        onPress={() =>
          navigation.navigate(STORY, {withAnimation: true, title, url})
        }>
        <Image source={{uri: thumbnailUrl}} style={styles.storyImage} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.storyContainer}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={storyData.storyData}
        renderItem={renderStory}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        ListEmptyComponent={() => <StoryPlaceHolder />}
      />
    </View>
  );
};

export default Story;
