import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { COLORS, SIZES } from "../../constants/theme";
import HomeScreen from "../../screens/home";
import ForecastScreen from "../../screens/forecast";

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <View
      style={{
        backgroundColor: "#ccc",
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 25 }}>Home</Text>
    </View>
  );
};

const ForeCast = () => {
  return (
    <View
      style={{
        backgroundColor: "#ccc",
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 25 }}>Home</Text>
    </View>
  );
};

const Map = () => {
  return (
    <View
      style={{
        backgroundColor: "#ccc",
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 25 }}>Home</Text>
    </View>
  );
};

const User = () => {
  return (
    <View
      style={{
        backgroundColor: "#ccc",
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 25 }}>Home</Text>
    </View>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel:false,
        headerShown: false,
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"
              size={25}
              style={{
                height: 30,
                color: focused ? "#FF6A65" : "#242334"
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Forecast"
        component={ForecastScreen}
        options={{
          tabBarLabel: "Forecast",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="weather-cloudy-clock"
              size={25}
              style={{
                height: 30,
                color: focused ? "#FF6A65" : "#242334",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarLabel: "Map",
          headerShown: true,
          tabBarIcon: ({ focused }) => (
            <Icon
              name="map"
              size={25}
              color={COLORS.accent}
              style={{
                height: 30,
                color: focused ? "#FF6A65" : "#242334",
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="User"
        component={User}
        options={{
            headerShown: true,
          tabBarLabel: "User",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="account-circle"
              size={25}
              color={COLORS.accent}
              style={{
                height: 30,
                color: focused ? "#FF6A65" : "#242334",
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
