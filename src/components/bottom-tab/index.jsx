import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { COLORS, SIZES } from "../../constants/theme";
import HomeScreen from "../../screens/home";
import ForecastScreen from "../../screens/forecast";
import OptionScreen from "../../screens/options";

const Tab = createBottomTabNavigator();

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
        name="HomeScreen"
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
        name="ForecastScreen"
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
        name="Option"
        component={OptionScreen}
        options={{
            headerShown: true,
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#242334" },
          tabBarLabel: "Option",
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
