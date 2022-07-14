import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, SimpleLineIcons } from "react-native-vector-icons";

import emblem from "../assets/emblem.png";
import nic from "../assets/footer.png";
import { Dropdown } from 'react-native-element-dropdown';

const StoresScreen = ({navigation}) => {
  
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  
  const [data, setData] = useState([]);

  fetch("http://impds.nic.in/IVR_Impds/getStatelist")
    .then((response) => response.json())
    .then((json) => {
      setData(json);
    });

  // const stateOption = data.map((item) => item.statename);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          STATE
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ borderWidth: 2, borderColor: "#0e4d92" }}></View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View style={{ padding: 10 }}>
            <Image
              source={emblem}
              backgroundColor={"white"}
              style={{ resizeMode: "contain", width: 50, height: 50 }}
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingRight: 30,
            }}
          >
            <Text style={{ fontWeight: "700", color: "#0e4d92" , fontSize:18}}>
              Mera Ration
            </Text>
            <Text style={{ color: "#0e4d92" }}>
              Department of Food Public Distribution
            </Text>
            <Text style={{ fontWeight: "700", color: "#0e4d92" }}>
              Govt of India
            </Text>
          </View>
        </View>
        <View style={{ borderWidth: 2, borderColor: "#0e4d92" }}></View>
      </View>

      <View style={styles.heading}>
        <View
          style={{
            paddingVertical: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          <AntDesign name="arrowleft" size={24} color={"white"} onPress={()=>navigation.navigate("HomeScreen")}/>
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 22 }}>
            ONORC Information
          </Text>
          <SimpleLineIcons name="options-vertical" size={18} color={"white"} />
        </View>
      </View>

      <View style={styles.content}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        // search
        maxHeight={300}
        // labelField="item"
        labelField="statename"
        valueField="statecode"
        placeholder={!isFocus ? 'Select state' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.statecode);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? 'blue' : 'black'}
            name="Safety"
            size={20}
          />
        )}
      />
      </View>


      <View style={styles.footer}>
        <View>
          <Text style={styles.text}>ONE NATION ONE RATION CARD</Text>
        </View>
        <View>
          <Image source={nic} style={styles.image} />
        </View>
      </View>
    </View>
  )
}

export default StoresScreen

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    top: 40,
    backgroundColor: "rgb(214, 219, 230)",
  },
  header: {
    width: "100%",
    height: 80,
    backgroundColor: "white",
  },
  heading: {
    width: "100%",
    backgroundColor: "#0e4d92",
  },
  content: {
    backgroundColor: "white",
    height:200,
    margin: 30,
    padding: 30,
    borderRadius: 10,
    borderColor: "rgb(101, 116, 145)",
  },
  footer: {
    width: "100%",
    // height:100,
    bottom: 30,
    position: "absolute",
    backgroundColor: "#0e4d92",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    color: "white",
    // padding:5,
    fontWeight: "bold",
  },
  image: {
    width: 100,
    resizeMode: "contain",
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});