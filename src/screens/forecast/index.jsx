import React, { useState } from "react";
import { View, Text, FlatList, Platform } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import styles from "./styles";
import { COLORS, SIZES } from "../../constants/theme";
import Icon from "react-native-vector-icons/Ionicons";
import { baseUrl, apiKey, WTF_GEO_API } from "../../constants/api";
import PannelForecast from "../../components/panel-forecast";

const ForecastScreen = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  const [city, setCity] = useState("");
  const [data, setData] = useState();
  const [error, setError] = useState();

  let [debounceTimeout, setdebounceTimeout] = useState(null);
  let geoApiOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c65e4c24aemsh3e43a4763b1dc0ap14f2ccjsn34a52d5a8758",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  const loadOptions = (inputValue) => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    debounceTimeout = setTimeout(() => {
      return fetch(
        `${WTF_GEO_API}?minPopulation=10000&namePrefix=${inputValue}`,
        geoApiOptions
      )
        .then((response) => response.json())
        .then((response) => {
          setItems(response.data);
        });
    }, 1000);
  };

  const weatherapi = async (item) => {
    let latitude = item.value[0];
    let longitude = item.value[1];
    try {
      const response = await fetch(
        `${baseUrl}/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
      );
      const json = await response.json();
      setData(json.list);
      setError(null);
    } catch (err) {
      setError(err);
    }
    // if (lat && lng) {
    //   apiCalling(lat, lng);
    // }
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.appName}>Forecasting</Text>
        <View>
          <DropDownPicker
            open={open}
            searchable
            onChangeSearchText={loadOptions}
            onSelectItem={(item) => {
              setCity(item.label)
              console.log("finalyyyyyyyyy", item);
              weatherapi(item);
            }}
            searchPlaceholder="Type to get the city"
            searchTextInputStyle={{
              borderWidth: 0,
              fontWeight: "700",
            }}
            searchContainerStyle={{
              paddingVertical: 15,
              borderBottomColor: COLORS.accent,
            }}
            placeholder="Select a city"
            placeholderStyle={{
              color: COLORS.darkGrey,
            }}
            containerStyle={{
              margin: 15,
              width: SIZES.width - 30,
            }}
            labelStyle={{
              color: COLORS.primary,
              fontWeight: "bold",
              fontSize: SIZES.h3,
            }}
            listItemLabelStyle={{
              color: COLORS.primary,
              fontWeight: "700",
            }}
            showTickIcon={false}
            dropDownContainerStyle={{
              borderColor: COLORS.primary,
            }}
            ArrowUpIconComponent={() => (
              <Icon name="chevron-up-sharp" size={20} color={COLORS.accent} />
            )}
            ArrowDownIconComponent={() => (
              <Icon name="chevron-down-sharp" size={20} color={COLORS.accent} />
            )}
            value={value}
            items={items.map(({ city, latitude, longitude }) => ({
              label: city,
              value: [latitude, longitude],
            }))}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>
      </View>
      {data ? (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View>
              <PannelForecast data={item} countryDetails={city} />
            </View>
          )}
        />
      ) : (
        <View style={styles.noData}>
          <Text style={styles.noDataTxt}>
            {!value ? " Select a city" : "Loading..."}
          </Text>
        </View>
      )}
    </View>
  );
};

export default ForecastScreen;
