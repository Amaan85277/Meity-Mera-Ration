import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, SimpleLineIcons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

import Footer from "../components/footer/Footer";
import emblem from "../assets/emblem.png";
import nic from "../assets/footer.png";

const CriteriaScreen = () => {
  const [cardNumber, setCardNumber] = useState("");
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
            <Text style={{ fontWeight: "700", color: "#0e4d92" , fontSize:18}}>
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
          <AntDesign name="arrowleft" size={24} color={"white"} onPress={()=>navigation.navigate("HomeScreen")}/>
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 22 }}>
            Check Aadhaar Seeding
          </Text>
          <SimpleLineIcons name="options-vertical" size={18} color={"white"} />
        </View>
      </View>

      <View style={styles.content}>
        <View style={{alignItems:"center"}}>
          <Text style={{fontWeight:"bold", color:"#0e4d92", fontSize:18}}>Please select an option</Text>
        </View>
        <View>

        </View>
      </View>

      <View style={styles.content}>  
        <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", margin:10}}>
          <View style={{padding:4, justifyContent:"space-between", alignItems:"center", width:120}}>
            <Text style={{fontSize:16}}>Ration Card No</Text>
          </View>
          <View style={{padding:10, justifyContent:"center", alignItems:"center"}}>
          <TextInput
            placeholder="Enter Ration card no"
            onChangeText={(text) => setCardNumber(text)}
            style={{borderWidth:1, borderColor:"white", borderBottomColor:"black"}}
          />
          </View>
        </View>

        
        <View>
          <TouchableOpacity
          style={{backgroundColor:"#0e4d92", alignItems:"center", padding:10, marginHorizontal:80, marginTop:20}}
          onPress={()=>navigation.navigate("HomeScreen")}>
            <Text style={{color:"white"}}>SUBMIT</Text>
            </TouchableOpacity>
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
    </View>
  );
};

export default CriteriaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 40,
    backgroundColor: "rgb(214, 219, 230)",
  },
  header: {
    width: "100%",
    height: 80,
    backgroundColor:"white",
  },
  heading: {
    width: "100%",
    backgroundColor: "#0e4d92",
  },
  content: {
    backgroundColor:"white",
    margin:30,
    padding:30,
    borderRadius:10,
    borderColor:"rgb(101, 116, 145)",
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
