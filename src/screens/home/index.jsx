import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Platform } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import styles from "./styles";
import CITY_LIST from "../../data/countries.json";
import { COLORS, SIZES } from "../../constants/theme";
import Icon from "react-native-vector-icons/Ionicons";
import { baseUrl, apiKey } from "../../constants/api";
import Pannel from "../../components/panel";

const HomeScreen = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(CITY_LIST);

  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    setData();
    const cityData = items.filter((val) => val.city === value);
    if (cityData.length > 0) {
      setLat(cityData[0].lat);
      setLng(cityData[0].lng);
    }
  }, [items, value]);

  useEffect(() => {
    const apiCalling = async () => {
      try {
        const response = await fetch(
          `${baseUrl}?lat=${lat}&lon=${lng}&appid=${apiKey}`
        );
        const json = await response.json();
        setData(json.list);
        setError(null);
      } catch (err) {
        setError(err);
      }
    };
    if (lat && lng) {
      apiCalling(lat, lng);
    }
  }, [lat, lng]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.appName}>Air Quality Index</Text>
        <View>
          <DropDownPicker
            open={open}
            searchable
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
            items={items.map(({ city }) => ({
              label: city,
              value: city,
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
              <Pannel data={item} />
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

export default HomeScreen;
