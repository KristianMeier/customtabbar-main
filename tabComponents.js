import React from "react";
import { Alert, TouchableOpacity, Image, View } from "react-native";
import styles from "./src/styles";
import plus from "./assets/plus.png";

export function ButtonView() {
  const showAlert = () => {
    Alert.alert("Press 'OK' to dublicate this weeks bookings to the next");
  };
  return (
    <TouchableOpacity onPress={showAlert}>
      <View style={styles.tabBarIcon}>
        <Image source={plus} style={styles.iconPlus} />
      </View>
    </TouchableOpacity>
  );
}