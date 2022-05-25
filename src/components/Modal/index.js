import {
  View,
  Text,
  Image,
  Modal as ReactModal,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import styles from './styles';

const Modal = ({selectedCard, modalVisible, setModalVisible}) => {
  return (
    <ReactModal animationType="fade" visible={modalVisible} transparent>
      <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.modal}>
          <TouchableWithoutFeedback>
            <View style={styles.modalInner}>
              <Image
                source={{uri: selectedCard.thumbnailUrl}}
                style={styles.modalImage}
              />
              <Text style={styles.modalText}>{selectedCard.title}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </ReactModal>
  );
};

export default Modal;
