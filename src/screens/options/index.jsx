import React, { useState } from "react";
import { View, Text, FlatList, Platform } from "react-native";

const OptionScreen = () => {
    return (
      <View
        style={{
          backgroundColor: "#ccc",
          justifyContent: "center",
          flex: 1,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 25 }}>Made with love ❤️ in 🇮🇳</Text>
      </View>
    );
  };

  export default OptionScreen;