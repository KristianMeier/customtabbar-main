import React from "react";
import styles from "./styles";
import { View, Text } from "react-native";



export function SwimmingScreen() {
  return (
    <View style={styles.screens}>
      <Text>Swimming</Text>
    </View>
  );
}

export function BookingScreen() {
  return (
    <View style={styles.screens}>
      <Text>My Bookings!</Text>
    </View>
  );
}

export function BikingScreen() {
  return (
    <View style={styles.screens}>
      <Text>Biking</Text>
    </View>
  );
}

export function RunningScreen() {
  return (
    <View style={styles.screens}>
      <Text>Running</Text>
    </View>
  );
}
