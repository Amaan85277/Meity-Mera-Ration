import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

import Data from "../../Data";
import OnboardingItem from "./OnboardingItem";

const Onboarding = () => {
  return (
    <View>
        <View style={{justifyContent:"center", alignItems:"center"}}>
      <FlatList
        data={Data}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        // bounces
        keyExtractor={(item)=>item.id}
      />
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex:1,
    // height:8,
    width:"100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
