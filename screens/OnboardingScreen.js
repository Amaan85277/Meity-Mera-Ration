import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import Onboarding from "../components/carousel/Onboarding";
import nic from "../assets/footer.png";
import emblem from "../assets/emblem.png";

const OnboardingScreen = () => {
  const navigation = useNavigation();

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
            <Text style={{ fontWeight: "700", color: "#0e4d92", fontSize: 18 }}>
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

      <View>
        <Onboarding />
      </View>

      <View style={{top:50,alignItems:"flex-end", padding:10}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={{fontWeight:"bold", fontSize:16, color:"white"}}>Go to Home</Text>
        </TouchableOpacity>
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
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 40,
    // backgroundColor: "rgb(214, 219, 230)",
    backgroundColor:"white"
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
  button: {
    backgroundColor: "#0e4d92",
    borderRadius: 20,
    paddingVertical:6,
    paddingHorizontal: 14,
    // width:80,
    justifyContent:"center",
    alignItems:"center",
    borderColor:"white",
    borderWidth:1,
  },
});
