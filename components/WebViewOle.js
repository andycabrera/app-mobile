import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import WebView from "react-native-webview";

const WebViewOle = () => {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: "https://www.ole.com.ar/" }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default WebViewOle;
