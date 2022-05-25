import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cardContainerPlaceholder: {
    backgroundColor: '#ebebeb',
    display: 'flex',
    flexDirection: 'row',
  },
  cardWrapperPlaceHolder: {
    height: 300,
    backgroundColor: 'white',
    width: 150,
    margin: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  cardImagePlaceHolder: {
    flex: 1,
  },
  cardTextWrapperPlaceHolder: {
    flex: 1,
    paddingHorizontal: 10,
  },
  cardTextPlaceHolder: {
    height: 10,
    width: '100%',
    marginVertical: 3,
    marginHorizontal: 'auto',
    borderRadius: 5,
    overflow: 'hidden',
  },
  cardTextPlaceHolderFirstChild: {
    marginTop: 15,
    height: 10,
    width: '100%',
    marginHorizontal: 'auto',
    marginVertical: 3,
    borderRadius: 5,
    overflow: 'hidden',
  },
});
