import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/home";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./src/components/bottom-tab";

export default function App() {
  return (
    <SafeAreaProvider style={styles.containers}>
      <NavigationContainer>
        <BottomTab></BottomTab>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
