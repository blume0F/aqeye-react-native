import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./src/components/bottom-tab";

export default function App() {
  return (
    <SafeAreaProvider style={styles.containers}>
      <NavigationContainer>
        <BottomTab />
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
