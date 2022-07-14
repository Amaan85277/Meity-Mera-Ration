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
    idType: "R",
    userName: "IMPDS",
    token: "91f01a0a96c526d28e4d0c1189e80459",
    sessionId: "2820190812185006",
  };

  useEffect(() => {
    fetch("http://impds.nic.in/impdsmobileapi/api/getrationcard", {
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: "10%",
//     // justifyContent: "space-around",
//     // alignItems: "center",
//   },
//   text: {
//     fontSize: 18,
//     color: "grey",
//   },
//   row: {
//     flexDirection: "column",
//     padding: 10,
//   },
//   nameContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     borderWidth: 1,
//     alignItems: "center",
//   },
//   bluebox: {
//     backgroundColor: "#0e4d92",
//     width: "60%",
//     height: 40,
//     justifyContent: "center",
//   },
// });

// import { StyleSheet, Text, View } from "react-native";
// import React, { useState } from "react";

// const RationResultScreen = ({ navigation, route }) => {
//   const [loading, setLoading] = useState(true);

//   const [stateName, setStateName] = useState("");
//   const [schemeName, setSchemeName] = useState("");
//   const [address, setAddress] = useState("");
//   const [Mname, setMname] = useState("");
//   const [relation, setRelation] = useState("");

//   const paramSetter = (value) => {
//     setStateName(value.homeStateName);
//     setSchemeName(value.schemeName);
//     setAddress(value.address);
//     setMname(value.memberDetailsList[0].memberName);
//     setRelation(value.memberDetailsList[0].releationship_name);
//   };

//   const data = {
//     id: route.params.id,
//     idType: "R",
//     userName: "IMPDS",
//     token: "91f01a0a96c526d28e4d0c1189e80459",
//     sessionId: "282019011812185006",
//   };

//   useEffect(() => {
//     fetch("http://impds.nic.in/impdsmobileapi/api/getrationcard/", {
//       method: "POST",
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then((json) => paramSetter(json))
//       .catch((e) => console.log(e))
//       .finally(() => setLoading(false));
//   }, []);

//   return (
// <View style={styles.container}>
//   {loading ? (
//     <Text>....Loading</Text>
//   ) : (
//     <View>
//       <View
//         style={{ borderColor: "orange", borderWidth: 1, top: 0 }}
//       ></View>
//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           padding: 10,
//         }}
//       >
//         <Text style={{ fontSize: 20, fontWeight: "700" }}>
//           Ration Card Details :
//         </Text>
//         <Entypo
//           name="cross"
//           size={24}
//           color={"black"}
//           onPress={navigation.navigate("Ration")}
//         />
//       </View>
//       <View
//         style={{ borderColor: "orange", borderWidth: 1, top: 0 }}
//       ></View>

//       <View style={{ flexDirection: "column", left: 30, marginTop: 100 }}>
//         <View style={styles.row}>
//           <View>
//             <Text style={[styles.text, { fontWeight: "700" }]}>
//               Home State Name :
//             </Text>
//           </View>
//           <View>
//             <Text style={styles.text}>{stateName}</Text>
//           </View>
//         </View>
//         <View style={styles.row}>
//           <View>
//             <Text style={[styles.text, { fontWeight: "700" }]}>
//               Ration Card Id :
//             </Text>
//           </View>
//           <View>
//             <Text style={styles.text}>{route.params.id}</Text>
//           </View>
//         </View>
//         <View style={styles.row}>
//           <View>
//             <Text style={[styles.text, { fontWeight: "700" }]}>
//               Scheme Name :
//             </Text>
//           </View>
//           <View>
//             <Text style={styles.text}>{schemeName}</Text>
//           </View>
//         </View>
//         <View style={styles.row}>
//           <View>
//             <Text style={[styles.text, { fontWeight: "700" }]}>
//               Address :
//             </Text>
//           </View>
//           <View>
//             <Text style={styles.text}>{address}</Text>
//           </View>
//         </View>
//       </View>

//       <View style={{ padding: 20, width: "100%" }}>
//         <View style={styles.nameContainer}>
//           <View style={styles.bluebox}>
//             <Text
//               style={[styles.text, { color: "white", fontWeight: "500" }]}
//             >
//               Member Name
//             </Text>
//           </View>
//           <View style={{ justifyContent: "center" }}>
//             <Text style={{ fontSize: 16 }}>{Mname}</Text>
//           </View>
//         </View>

//         <View style={styles.nameContainer}>
//           <View style={styles.bluebox}>
//             <Text
//               style={[styles.text, { color: "white", fontWeight: "500" }]}
//             >
//               RelationShip Name
//             </Text>
//           </View>
//           <View style={{ justifyContent: "center" }}>
//             <Text style={{ fontSize: 16 }}>{relation}</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   )}
// </View>
//   );
// };
