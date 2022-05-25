import {ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Modal from '../../components/Modal';
import Story from '../../components/Story';
import Accordion from '../../components/Accordion';
import Card from '../../components/Card';

const Dashboard = () => {
  const [storyData, setStoryData] = useState([]);
  const [cardData, setcardData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  useEffect(() => {
    const storyUrl = axios.get(
      'https://jsonplaceholder.typicode.com/albums/1/photos',
    );
    const cardUrl = axios.get(
      'https://jsonplaceholder.typicode.com/albums/2/photos',
    );

    axios.all([storyUrl, cardUrl]).then(
      axios.spread((resStory, resCard) => {
        setStoryData(resStory.data);
        setcardData(resCard.data);
      }),
    );
  }, []);

  return (
    <ScrollView>
      <Modal
        modalVisible={modalVisible}
        selectedCard={selectedCard}
        setModalVisible={setModalVisible}
      />
      <Story storyData={storyData} />
      <Card
        cardData={cardData}
        setModalVisible={setModalVisible}
        setSelectedCard={setSelectedCard}
      />
      <Accordion />
    </ScrollView>
  );
};

export default Dashboard;
