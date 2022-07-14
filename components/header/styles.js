import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width:"100%",
    position: "relative",
    // justifyContent: "flex-start",
    // height:"20%"
    // paddingTop:40   // for the status bar, will see what can we do for this
  },
  upperHeader:{
    backgroundColor:"#0e2845",
    flexDirection:"row",
    justifyContent:"space-between",
    paddingVertical:8,
    paddingHorizontal:15
  },
  searchIcon:{
    backgroundColor:"#0e4d92",
    padding:4
  },
  lowerHeader:{
    backgroundColor:"#0e4d92",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:15
  },
  image:{
    width:150,
    // height:134,
    padding:0,
  }
  
});

export default styles;
