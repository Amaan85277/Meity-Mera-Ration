import React from "react";
import { View, StyleSheet } from "react-native";

import UpperHeader from "./UpperHeader";
import LowerHeader from "./LowerHeader";

const Header = () => {
  return (
    <View>
      <UpperHeader />
      <LowerHeader />
    </View>
  );
};

export default Header;

