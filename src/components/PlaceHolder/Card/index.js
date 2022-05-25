import {View} from 'react-native';
import React, {createRef} from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';

const CardPlaceHolder = () => {
  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

  const cardRef = createRef();

  return (
    <View style={styles.cardContainerPlaceholder}>
      <View style={styles.cardWrapperPlaceHolder}>
        <View style={styles.cardImagePlaceHolder}>
          <ShimmerPlaceHolder
            ref={cardRef}
            LinearGradient={LinearGradient}
            style={{height: '100%', width: '100%'}}
          />
        </View>
        <View style={styles.cardTextWrapperPlaceHolder}>
          <View style={styles.cardTextPlaceHolderFirstChild}>
            <ShimmerPlaceHolder
              ref={cardRef}
              LinearGradient={LinearGradient}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.cardTextPlaceHolder}>
            <ShimmerPlaceHolder
              ref={cardRef}
              LinearGradient={LinearGradient}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.cardTextPlaceHolder}>
            <ShimmerPlaceHolder
              ref={cardRef}
              LinearGradient={LinearGradient}
              style={{height: '100%', width: '100%'}}
            />
          </View>
        </View>
      </View>

      <View style={styles.cardWrapperPlaceHolder}>
        <View style={styles.cardImagePlaceHolder}>
          <ShimmerPlaceHolder
            ref={cardRef}
            LinearGradient={LinearGradient}
            style={{height: '100%', width: '100%'}}
          />
        </View>
        <View style={styles.cardTextWrapperPlaceHolder}>
          <View style={styles.cardTextPlaceHolderFirstChild}>
            <ShimmerPlaceHolder
              ref={cardRef}
              LinearGradient={LinearGradient}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.cardTextPlaceHolder}>
            <ShimmerPlaceHolder
              ref={cardRef}
              LinearGradient={LinearGradient}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.cardTextPlaceHolder}>
            <ShimmerPlaceHolder
              ref={cardRef}
              LinearGradient={LinearGradient}
              style={{height: '100%', width: '100%'}}
            />
          </View>
        </View>
      </View>

      <View style={styles.cardWrapperPlaceHolder}>
        <View style={styles.cardImagePlaceHolder}>
          <ShimmerPlaceHolder
            ref={cardRef}
            LinearGradient={LinearGradient}
            style={{height: '100%', width: '100%'}}
          />
        </View>
        <View style={styles.cardTextWrapperPlaceHolder}>
          <View style={styles.cardTextPlaceHolderFirstChild}>
            <ShimmerPlaceHolder
              ref={cardRef}
              LinearGradient={LinearGradient}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.cardTextPlaceHolder}>
            <ShimmerPlaceHolder
              ref={cardRef}
              LinearGradient={LinearGradient}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.cardTextPlaceHolder}>
            <ShimmerPlaceHolder
              ref={cardRef}
              LinearGradient={LinearGradient}
              style={{height: '100%', width: '100%'}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardPlaceHolder;
