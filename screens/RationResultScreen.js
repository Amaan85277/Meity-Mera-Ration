import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign, SimpleLineIcons } from "react-native-vector-icons";

import emblem from "../assets/emblem.png";
import nic from "../assets/footer.png";

const RationResultScreen = ({ navigation, route }) => {
  const [stateName, setStateName] = useState("");
  const [schemeName, setSchemeName] = useState("");
  const [address, setAddress] = useState("");
  const [Mname, setMname] = useState("");
  const [relation, setRelation] = useState("");

  const paramSetter = (value) => {
    setStateName(value.homeStateName);
    setSchemeName(value.schemeName);
    setAddress(value.address);
    setMname(value.memberDetailsList[0].memberName);
    setRelation(value.memberDetailsList[0].releationship_name);
  };

  const [loading, setLoading] = useState(true);

  const data = {
    id: route.params.id,
    idType: "",
    userName: "",
    token: "",
    sessionId: "",
  };

  useEffect(() => {
    fetch("", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((value) => {
        paramSetter(value);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <View>
        <Text>....Loading</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={{ borderWidth: 2, borderColor: "#0e4d92" }}></View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
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
                <Text
                  style={{ fontWeight: "700", color: "#0e4d92", fontSize: 18 }}
                >
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
              <AntDesign
                name="arrowleft"
                size={24}
                color={"white"}
                onPress={() => navigation.navigate("HomeScreen")}
              />
              <Text
                style={{ fontWeight: "bold", color: "white", fontSize: 22 }}
              >
                ONORC Information
              </Text>
              <SimpleLineIcons
                name="options-vertical"
                size={18}
                color={"white"}
              />
            </View>
          </View>

          <View style={styles.content}>
            <Text style={{fontSize:18}}>ID : </Text>
            <Text style={{fontSize:16, color:"gray"}}>{route.params.id}</Text>
            <Text></Text>
            <Text style={{fontSize:18}}>NAME: </Text>
            <Text style={{fontSize:16, color:"gray"}}>{Mname}</Text>
            <Text></Text>
            <Text style={{fontSize:18}}>STATE: </Text>
            <Text style={{fontSize:16, color:"gray"}}>{stateName}</Text>
            <Text></Text>
            <Text style={{fontSize:18}}>Scheme: </Text>
            <Text style={{fontSize:16, color:"gray"}}>{schemeName}</Text>
            <Text></Text>
            <Text style={{fontSize:18}}>ADDRESS: </Text>
            <Text style={{fontSize:16, color:"gray"}}>{address}</Text>
            <Text></Text>
            <Text style={{fontSize:18}}>Relation: </Text>
            <Text style={{fontSize:16, color:"gray"}}>{relation}</Text>
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
      )}
    </>
  );
};

export default RationResultScreen;

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
    justifyContent:"space-evenly",
    // alignItems:"center",
    margin: 10,
    padding: 10,
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
});

