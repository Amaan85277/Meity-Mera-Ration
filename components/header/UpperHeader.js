import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "react-native-vector-icons";

export default () => {
  return (
    <View style={styles.container}>
      <Ionicons name={"settings-outline"} size={30} color={"white"} />
      <Ionicons name="language" size={24} color={"white"} />
      <View style={styles.searchIcon}>
        <Ionicons name="search" size={24} color={"white"} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor:"#0e2845",
        flexDirection:"row",
        // height:200,
        paddingHorizontal:15,
        paddingVertical:8,
        paddingTop:50,
        justifyContent:"space-between"
    },
  });