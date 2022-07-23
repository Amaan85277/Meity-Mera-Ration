import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Content from "../components/Content";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      {/* two scroll lists because on implementation of only one, the footer didn't retain it's position i.e. bottom and moved with the content */}
      <ScrollView>
        <ScrollView>
          <Content />
        </ScrollView>
        <Footer />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
