// https://github.com/ReactiveKoding/customtabbar

import React from 'react';
import { Animated, Image, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import plus from './assets/plus.png'
import { FontAwesome5 } from '@expo/vector-icons'
import { useRef } from 'react';
import { HomeScreen } from './src/Screens/HomeScreen';
import { RunningScreen } from './src/Screens/RunningScreen';
import { BikingScreen } from './src/Screens/BikingScreen';
import { SwimmingScreen  } from './src/Screens/SwimmingScreen';
import styles, { getWidth } from './src/styles';

const Tab = createBottomTabNavigator();

export default function App() {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  console.log(tabOffsetValue)
  return (
    <NavigationContainer >
      <Tab.Navigator tabBarOptions={{
        showLabel: false,
        style: styles.bottomBar
      }}>
        <Tab.Screen name={"HomeScreen"} component={HomeScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.icon}>
              <FontAwesome5
                  name="home" size={20} color={focused ? 'red' : 'gray'} />
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, { toValue: 0, useNativeDriver: true }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name={"Running"} component={RunningScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.icon}>
              <FontAwesome5 name="running" size={20} color={focused ? 'red' : 'gray'} />
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, { toValue: getWidth(), useNativeDriver: true }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name={"ActionButton"} component={""} options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity>
              <View style={styles.tabBarIcon}>
                  <Image source={plus} style={styles.iconPlus} />
              </View>
            </TouchableOpacity>
          )
        }}></Tab.Screen>

        <Tab.Screen name={"Bikings"} component={BikingScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.icon}>
              <FontAwesome5 name="biking" size={20} color={focused ? 'red' : 'gray'} />
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, { toValue: getWidth() * 3, useNativeDriver: true }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name={"Swimming"} component={SwimmingScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.icon  }>
              <FontAwesome5 name="swimmer" size={20} color={focused ? 'red' : 'gray'} />
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, { toValue: getWidth() * 4, useNativeDriver: true }).start();
          }
        })}></Tab.Screen>
      </Tab.Navigator>
      <Animated.View style={{
        ...styles.buttomMarker,
        transform: [{ translateX: tabOffsetValue}] // hvordan lægges jeg denne i external stylesheet
      }}></Animated.View>
    </NavigationContainer>
  );
}
