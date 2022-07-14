// import { StyleSheet, Text, View } from "react-native";
// import React, { useState } from "react";

// import { Entypo } from "react-native-vector-icons";

// const SeedingResultScreen = ({ navigation, route }) => {
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
//     sessionId: "2820190812185006",
//   };

//   fetch("http://impds.nic.in//impdsmobileapi/api/getrationcard/", {
//     method: "POST",
//     body: JSON.stringify(data),
//   })
//     .then((response) => response.json())
//     .then((value) => paramSetter(value))
//     .catch((e) => console.log(e));

//   return (
//     <View style={styles.container}>
//       <View style={{ borderColor: "orange", borderWidth: 1, top: 0 }}></View>
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
//           onPress={navigation.navigate("Seeding")}
//         />
//       </View>
//       <View style={{ borderColor: "orange", borderWidth: 1, top: 0 }}></View>

//       {/* <View style={{padding:10, justifyContent:"center", flexDirection:"row", }}>
//         <View style={{}}>
//           <Text style={styles.text}>Home State Name </Text>
//           <Text style={styles.text}>Ration Card Id </Text>
//           <Text style={styles.text}>Scheme Name </Text>
//           <Text style={styles.text}>Address </Text>
//         </View>
//         <View style={{}}>
//           <Text style={styles.text}>: {stateName}</Text>
//           <Text style={styles.text}>: {route.params.id}</Text>
//           <Text style={styles.text}>: {schemeName}</Text>
//           <Text style={styles.text}>: {address}</Text>
//         </View>
//       </View> */}

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
//             <Text style={[styles.text, { fontWeight: "700" }]}>Address :</Text>
//           </View>
//           <View>
//             <Text style={styles.text}>{address}</Text>
//           </View>
//         </View>
//       </View>

//       <View style={{ padding: 20, width: "100%" }}>
//         <View style={styles.nameContainer}>
//           <View style={styles.bluebox}>
//             <Text style={[styles.text, { color: "white", fontWeight: "500" }]}>
//               Member Name
//             </Text>
//           </View>
//           <View style={{ justifyContent: "center" }}>
//             <Text style={{ fontSize: 16 }}>{Mname}</Text>
//           </View>
//         </View>

//         <View style={styles.nameContainer}>
//           <View style={styles.bluebox}>
//             <Text style={[styles.text, { color: "white", fontWeight: "500" }]}>
//               RelationShip Name
//             </Text>
//           </View>
//           <View style={{ justifyContent: "center" }}>
//             <Text style={{ fontSize: 16 }}>{relation}</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default SeedingResultScreen;

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

import { View, Text } from 'react-native'
import React from 'react'

const SeedingResultScreen = () => {
  return (
    <View>
      <Text>SeedingResultScreen</Text>
    </View>
  )
}

export default SeedingResultScreen
