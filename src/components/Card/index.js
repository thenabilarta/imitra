import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import CardPlaceHolder from '../PlaceHolder/Card';

const Card = cardData => {
  const renderCard = ({item}) => (
    <CardItem
      id={item.id}
      thumbnailUrl={item.thumbnailUrl}
      title={item.title}
    />
  );

  const CardItem = ({thumbnailUrl, title}) => (
    <TouchableOpacity
      style={styles.cardWrapper}
      onPress={() => {
        cardData.setModalVisible(true);
        cardData.setSelectedCard({thumbnailUrl, title});
      }}>
      <Image source={{uri: thumbnailUrl}} style={styles.cardImage} />

      <View style={styles.cardTextWrapper}>
        <Text style={styles.cardText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.cardContainer}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={cardData.cardData}
        renderItem={renderCard}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        ListEmptyComponent={() => <CardPlaceHolder />}
      />
    </View>
  );
};

export default Card;
