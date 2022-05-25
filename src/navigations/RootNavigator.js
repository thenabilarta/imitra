import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {DASHBOARD, STORY} from '../constants/routeNames';
import {useNavigation} from '@react-navigation/native';
import Dashboard from '../screens/Dashboard';
import Story from '../screens/Story';

const RootNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName={DASHBOARD}>
      <HomeStack.Screen
        name={DASHBOARD}
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name={STORY}
        component={Story}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          title: 'Story',
        }}
      />
    </HomeStack.Navigator>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    aspectRatio: 2.2,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  rightIcon: {
    marginRight: 10,
  },
  rightIconWrapper: {
    marginRight: 10,
    display: 'flex',
    flexDirection: 'row',
  },
});

export default RootNavigator;
