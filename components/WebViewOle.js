import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const WebViewOle = ({ task, onDelete }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Ejemplo de WebView en React Native</Text>
      <WebView
        source={{ uri: "https://www.ole.com.ar/" }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default WebViewOle;
