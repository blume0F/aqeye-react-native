import React from "react";
import { BarChart } from "react-native-chart-kit";
import { View, Text, FlatList, Platform } from "react-native";
import { Dimensions } from "react-native";
import styles from "./styles";

const screenWidth = Dimensions.get("window").width;
const chartConfig = {
  backgroundGradientFrom: "#242334",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#FF6A65",
  backgroundGradientToOpacity: 0.5,
  color: (opacity) => `#242334`,
  strokeWidth: 5,

  barPercentage: 0.5,
  useShadowColorFromDataset: false,
};

const Graph = (props) => {
  const { graphData, countryData } = props.route.params;
  let items = graphData.components;
  console.log("items------", items);
  let emissionArray = [];
  let labelsArray = [];
  for (let [key, val] of Object.entries(items)) {
    emissionArray.push(val);
    labelsArray.push(key);
  }
  const data = {
    labels: labelsArray,
    datasets: [
      {
        data: emissionArray,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.city}>{countryData} Graph Data :</Text>
      </View>
      <BarChart
        data={data}
        width={screenWidth}
        height={320}
        yAxisLabel=""
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
    </View>
  );
};

export default Graph;
