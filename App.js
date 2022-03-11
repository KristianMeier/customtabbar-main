import React from 'react';
import { Animated, Image, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import plus from './assets/plus.png'
import styles, { getWidth } from './styles';
import { BookingScreen, RunningScreen, BikingScreen, SwimmingScreen } from './screens';
import { FontAwesome5 } from '@expo/vector-icons'
import { useRef } from 'react';

const Tab = createBottomTabNavigator();

export default function App() {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <NavigationContainer >
      <Tab.Navigator tabBarOptions={{
        showLabel: false,
        style: styles.bottomBar
      }}>
        <Tab.Screen name={"MyBookings"} component={BookingScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.icon}>
              <FontAwesome5
                name="user-alt"
                size={20}
                color={focused ? 'red' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name={"Running"} component={RunningScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.icon}>
              <FontAwesome5
                name="running"
                size={20}
                color={focused ? 'red' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth(),
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name={"ActionButton"} component={""} options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity>
              <View style=
              {{
                width: 55,
                height: 55,
                backgroundColor: 'red',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: Platform.OS == "android" ? 50 : 30
              }}
              >
                  <Image source={plus} style={{
                    width: 22,
                    height: 22,
                    tintColor: 'white'
                  }}></Image>
              </View>
            </TouchableOpacity>
          )
        }}></Tab.Screen>

        <Tab.Screen name={"Bikings"} component={BikingScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.icon}>
              <FontAwesome5
                name="biking"
                size={20}
                color={focused ? 'red' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 3,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name={"Swimming"} component={SwimmingScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.icon  }>
              <FontAwesome5
                name="swimmer"
                size={20}
                color={focused ? 'red' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 4,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
      </Tab.Navigator>
      <Animated.View style={{
            width: getWidth() - 20,
            height: 2,
            backgroundColor: 'red',
            position: 'absolute',
            bottom: 98,
            left: 50,
            borderRadius: 20,
            transform: [
              { translateX: tabOffsetValue }
            ]
      }}></Animated.View>
    </NavigationContainer>
  );
}
