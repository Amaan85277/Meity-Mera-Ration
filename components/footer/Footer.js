import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import nic from "../../assets/footer.png"

const Footer = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>ONE NATION ONE RATION CARD</Text>
      </View>
      <View>
        <Image source={nic} style={styles.image} />
      </View>
    </View>
  )
}

export default Footer;

const styles = StyleSheet.create({
    container:{
      width:"100%",
      alignItems:"center" ,
      backgroundColor:"#0e4d92",
      // position:'relative',
      bottom:0,
      flexDirection:"row",
      justifyContent:"space-around"
    },
    text:{
        color:"white",
        // padding:5,
        fontWeight:"bold"
    },
    image:{
      width:100,
      resizeMode:"contain"
    }
})