import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Ionicons } from "react-native-vector-icons";

import logo from "../../assets/nic.png";

export default () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image}/>
      <Ionicons name="menu" size={35} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#0e4d92",
        paddingHorizontal:15
    },
    image:{
        width:"60%",
        // height:"100",
        resizeMode:"contain"
    }
  });