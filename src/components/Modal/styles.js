import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modalView: {
    width: '90%',
    height: '50%',
    margin: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalInner: {
    height: '50%',
    width: '90%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'relative',
  },
  modalImage: {
    height: '100%',
    width: '100%',
  },
  modalText: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 10,
  },
});
