import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  View,
  Linking,
  Text,
  Alert,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

import Onboarding from "./carousel/Onboarding";

const Content = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <View style={{ borderBottomColor: "white", borderWidth: 1 }}></View> */}

      {/* <View style={{height:200}}>
        <Onboarding/>
      </View> */}

      {/* <View>
        <Text style={{color:"#0e4d92", fontWeight:"bold", fontSize:28}}>HOME</Text>
      </View> */}

      {/* <View style={{ borderColor: "#0e4d92", borderWidth: 0.2, marginTop:5 }}></View> */}

      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate("Ration")}
        >
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="clipboard-edit-outline"
              size={30}
              color={"rgb(13, 117, 158)"}
            />
          </View>
          <Text style={{ fontWeight: "500", textAlign: "center" }}>
            Know Your Ration
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate("Store")}
        >
          <View style={styles.icon}>
            <FontAwesome5 name="store" size={30} color={"rgb(152, 34, 176)"} />
          </View>
          <Text style={{ fontWeight: "500", textAlign: "center" }}>
            Nearby Ration Store
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => {
            Alert.alert(
              "Redirecting",
              "This apps wants to redirect you to a website!!",
              [
                {
                  text: "Cancel",
                },{
                  text: "Ok",
                  onPress: () => Linking.openURL("http://impds.nic.in/sale/"),
                },
              ],
              {
                cancelable: true,
              }
            );
            // Alert.alert("Redirecting to a different page");
            
            // onPress={() => navigation.navigate("States")}
          }}
        >
          <View style={styles.icon}>
            <Entypo name="location" size={30} color={"rgb(203, 189, 33)"} />
          </View>
          <Text style={{ fontWeight: "500", textAlign: "center" }}>
            ONORC States
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate("Criteria")}
        >
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="clipboard-check-multiple-outline"
              size={30}
              color={"rgb(22, 155, 22)"}
            />
          </View>
          <Text style={{ fontWeight: "500", textAlign: "center" }}>
            Eligibility Criteria
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate("Seeding")}
        >
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="clipboard-text-search-outline"
              size={30}
              color={"rgb(202, 121, 29)"}
            />
          </View>
          <Text style={{ fontWeight: "500", textAlign: "center" }}>
            Aadhaar Seeding
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate("Feedback")}
        >
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="comment-edit-outline"
              size={30}
              color={"rgb(29, 202, 136)"}
            />
          </View>
          <Text style={{ fontWeight: "500", textAlign: "center" }}>
            Suggestion/Feedback
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    borderColor: "white",
    backgroundColor: "white",
  },
  image: {
    padding: 10,
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 50,
  },
  iconContainer: {
    height: 140,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 2, width: 2 }, // IOS
    shadowOpacity: 2, // IOS
    shadowRadius: 2, //IOS
    backgroundColor: "#fff",
    elevation: 8, // Android
  },
  icon: {
    borderRadius: 50,
    borderColor: "grey",
    borderWidth: 2,
    padding: 15,
  },
});
