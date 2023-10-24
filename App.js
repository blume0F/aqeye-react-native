import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./src/components/bottom-tab";
import { createStackNavigator } from '@react-navigation/stack';
import Graph from "./src/components/graph";
const Stack = createStackNavigator();
import { View, Text } from "react-native";

export default function App() {
  return (
    <SafeAreaProvider style={styles.containers}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={BottomTab} />
          <Stack.Screen
            options={{
              headerShown: true,
              headerTintColor: "white",
              headerStyle: { backgroundColor: "#242334" },
              headerBackTitle: 'Back'
            }}
            name="Graph"
            component={Graph}
          />
        </Stack.Navigator>
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
