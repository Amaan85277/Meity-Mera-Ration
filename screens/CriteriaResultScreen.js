import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign, SimpleLineIcons} from "react-native-vector-icons";

import emblem from "../assets/emblem.png";
import nic from "../assets/footer.png";

const CriteriaResultScreen = ({ navigation, route }) => {
  const [loading, setLoading] = useState(true);

  const [time, setTime] = React.useState();

  const [stateName, setStateName] = useState("");
  const [schemeName, setSchemeName] = useState("");
  const [district, setDistrict] = useState("");
  const [FPS, setFPS] = useState("");
  const [dupID, setDupID] = useState("");
  const [allowed, setAllowed] = useState("");

  const paramSetter = (value) => {
    setStateName(value.homeStateName);
    setSchemeName(value.schemeName);
    setDistrict(value.homeDistName);
    setFPS(value.fpsId);
    setDupID(value.dup_uid_status);
    setAllowed(value.allowed_onorc);
  };

  const data = {
    id: route.params.id,
    idType: "R",
    userName: "IMPDS",
    token: "91f01a0a96c526d28e4d0c1189e80459",
    sessionId: "282019011812185006",
  };

  // for date and time
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    fetch("http://impds.nic.in/impdsmobileapi/api/getrationcard/", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => paramSetter(json))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>....Loading</Text>
      ) : (
        <>
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
                onPress={() => navigation.goBack()}
              />
              <Text
                style={{ fontWeight: "bold", color: "white", fontSize: 22 }}
              >
                Eligibilty Criteria
              </Text>
              <SimpleLineIcons
                name="options-vertical"
                size={18}
                color={"white"}
              />
            </View>
          </View>

          <View style={styles.content}>

            <View style={{flexDirection:"row", alignItems:"center"}}>
              <Text style={{color:"#0e4d92", fontSize:18, fontWeight:"bold"}}>Date and Time : </Text>
              <Text style={{fontSize:16, fontWeight:"500"}}>{time}</Text>
            </View>

            {/* just for spacing */}
            <View style={{ height: 20 }}></View>

            <View style={styles.upperContent}>
              {/* two view in flex:coloumn direction */}
              <View>
                <Text style={styles.upperContent_heading}> Home State </Text>
                <Text style={styles.upperContent_heading}> Home District </Text>
                <Text style={styles.upperContent_heading}> Scheme </Text>
                <Text style={styles.upperContent_heading}> Card ID </Text>
                <Text style={styles.upperContent_heading}> FPS ID </Text>
              </View>
              <View>
                <Text style={{ padding: 6 }}> : </Text>
                <Text style={{ padding: 6 }}> : </Text>
                <Text style={{ padding: 6 }}> : </Text>
                <Text style={{ padding: 6 }}> : </Text>
                <Text style={{ padding: 6 }}> : </Text>
              </View>
              <View>
                <Text style={styles.upperContent_ids}> {stateName} </Text>
                <Text style={styles.upperContent_ids}> {district} </Text>
                <Text style={styles.upperContent_ids}> {schemeName} </Text>
                <Text style={styles.upperContent_ids}> {route.params.id} </Text>
                <Text style={styles.upperContent_ids}> {FPS} </Text>
              </View>
            </View>

            {/* just for spacing */}
            <View style={{ height: 30 }}></View>

            <View style={styles.lowerContent}>
              <View style={{ width: "70%" }}>
                <Text
                  style={[
                    styles.lowerContent_text,
                    {
                      fontSize: 16,
                      color: "white",
                      backgroundColor: "rgb(0, 170, 255)",
                    },
                  ]}
                >
                  {" "}
                  REMARKS{" "}
                </Text>
                <Text style={styles.lowerContent_text}>
                  {" "}
                  Beneficiary with Duplicate ID{" "}
                </Text>
                <Text style={styles.lowerContent_text}>
                  {" "}
                  IMPDS Availablity{" "}
                </Text>
                <Text style={styles.lowerContent_text}>
                  {" "}
                  Sale Details in IMPDS{" "}
                </Text>
                <Text style={styles.lowerContent_text}> Allowed in IMPDS </Text>
              </View>
              <View style={{ width: "30%" }}>
                <Text
                  style={[
                    styles.lowerContent_text,
                    {
                      fontSize: 16,
                      color: "white",
                      backgroundColor: "rgb(0, 170, 255)",
                    },
                  ]}
                >
                  {" "}
                  STATUS{" "}
                </Text>
                <Text style={styles.lowerContent_text}>{" " + dupID + " "}</Text>
                <Text style={styles.lowerContent_text}>{" " + allowed + " "}</Text>
                <Text style={styles.lowerContent_text}> N/A </Text>
                <Text style={styles.lowerContent_text}>{" " + allowed + " "}</Text>
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <View>
              <Text style={styles.text}>ONE NATION ONE RATION CARD</Text>
            </View>
            <View>
              <Image source={nic} style={styles.image} />
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default CriteriaResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 40,
    backgroundColor: "white",
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
    flex: 3,
    alignItems: "center",
    paddingTop: 30,
    justifyContent: "flex-start",
  },
  footer: {
    width: "100%",
    bottom: 30,
    position: "absolute",
    backgroundColor: "#0e4d92",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
  image: {
    width: 100,
    resizeMode: "contain",
  },
  upperContent: {
    borderColor: "#0e4d92",
    height: 200,
    borderWidth: 2,
    width: "90%",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  upperContent_heading: {
    padding: 6,
    fontSize: 16,
    fontWeight: "600",
    color: "rgb(0, 170, 255)",
  },
  upperContent_ids: { padding: 6, fontWeight: "400", fontSize: 16 },
  lowerContent: {
    height: 200,
    width: "98%",
    flexDirection: "row",
  },
  lowerContent_text: {
    borderWidth: 1,
    fontSize: 14,
    fontWeight: "400",
    padding: 4,
  },
});
