import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { COLORS } from "../../constants/theme";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Pannel = (props) => {
  const navigation = useNavigation();
  const { data, countryDetails } = props;
  const [airQuality, setAirQuality] = useState();
  const [date] = useState(new Date(data.dt * 1000).toLocaleDateString("en-GB"));
  const [time] = useState(
    new Date(data.dt * 1000).toLocaleTimeString("en-GB").slice(0, 5)
  );

  useEffect(() => {
    switch (data.main.aqi) {
      case 1:
        setAirQuality("Good");
        break;
      case 2:
        setAirQuality("Fair");
        break;
      case 3:
        setAirQuality("Moderate");
        break;
      case 4:
        setAirQuality("Poor");
        break;
      case 5:
        setAirQuality("Very Poor");
        break;
      default:
        setAirQuality("Not Identified");
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.city}>{countryDetails}</Text>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={styles.date}>
            {date}
            {" | "}
            {time}
          </Text>
          <Text style={styles.index}>Quality Index: {airQuality}</Text>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Entypo name="area-graph" size={25} color={COLORS.accent}
          onPress={() =>
            navigation.navigate("Graph",{graphData:data,countryData:countryDetails})
          }
          />
        </TouchableOpacity>
      </View>
      {
        <View>
          <View style={styles.row}>
            <View>
              <Text style={styles.title}>CO</Text>
            </View>
            <View style={styles.txtRow}>
              <Text style={styles.subtitle}>{data.components.co}</Text>
              <Text style={styles.subtitle}>μg/m</Text>
              <Text style={styles.subtitleSub}>3</Text>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.row}>
            <View>
              <Text style={styles.title}>NO</Text>
            </View>
            <View style={styles.txtRow}>
              <Text style={styles.subtitle}>{data.components.no}</Text>
              <Text style={styles.subtitle}>μg/m</Text>
              <Text style={styles.subtitleSub}>3</Text>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.row}>
            <View style={styles.txtRow}>
              <Text style={styles.title}>NO</Text>
              <Text style={styles.titleSub}>2</Text>
            </View>
            <View style={styles.txtRow}>
              <Text style={styles.subtitle}>{data.components.no2}</Text>
              <Text style={styles.subtitle}>μg/m</Text>
              <Text style={styles.subtitleSub}>3</Text>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.row}>
            <View style={styles.txtRow}>
              <Text style={styles.title}>O</Text>
              <Text style={styles.titleSub}>3</Text>
            </View>
            <View style={styles.txtRow}>
              <Text style={styles.subtitle}>{data.components.o3}</Text>
              <Text style={styles.subtitle}>μg/m</Text>
              <Text style={styles.subtitleSub}>3</Text>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.row}>
            <View style={styles.txtRow}>
              <Text style={styles.title}>SO</Text>
              <Text style={styles.titleSub}>2</Text>
            </View>
            <View style={styles.txtRow}>
              <Text style={styles.subtitle}>{data.components.so2}</Text>
              <Text style={styles.subtitle}>μg/m</Text>
              <Text style={styles.subtitleSub}>3</Text>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.row}>
            <View style={styles.txtRow}>
              <Text style={styles.title}>PM</Text>
              <Text style={styles.titleSub}>2.5</Text>
            </View>
            <View style={styles.txtRow}>
              <Text style={styles.subtitle}>{data.components.pm2_5}</Text>
              <Text style={styles.subtitle}>μg/m</Text>
              <Text style={styles.subtitleSub}>3</Text>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.row}>
            <View style={styles.txtRow}>
              <Text style={styles.title}>PM</Text>
              <Text style={styles.titleSub}>10</Text>
            </View>
            <View style={styles.txtRow}>
              <Text style={styles.subtitle}>{data.components.pm10}</Text>
              <Text style={styles.subtitle}>μg/m</Text>
              <Text style={styles.subtitleSub}>3</Text>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.row}>
            <View style={styles.txtRow}>
              <Text style={styles.title}>NH</Text>
              <Text style={styles.titleSub}>3</Text>
            </View>
            <View style={styles.txtRow}>
              <Text style={styles.subtitle}>{data.components.nh3}</Text>
              <Text style={styles.subtitle}>μg/m</Text>
              <Text style={styles.subtitleSub}>3</Text>
            </View>
          </View>
          <View style={styles.line} />
        </View>
      }
    </View>
  );
};

export default Pannel;
