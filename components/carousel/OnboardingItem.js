import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React from "react";

const OnboardingItem = ({ item }) => {

  return (
    <View style={[styles.container]}>
      <Image source={item.image} style={[styles.image]} />
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    // height:800,
    backgroundColor: "#0e4d92",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    // backgroundColor:"teal",
    // flex: 0.5,
    height:400,
    width:394,
    // padding:10,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
});
