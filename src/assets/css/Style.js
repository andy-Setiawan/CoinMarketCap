import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const global = {
  backgroundColor: "#282a36",
  headerColor: "#3339bf",
  textColor: "#fafafa"
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: global.backgroundColor,
    flex: 1
  }
});

export const signIn = StyleSheet.create({
  topContainer: {
    backgroundColor: global.headerColor,
    height: height * 0.4,
    padding: 20,
    alignItems: "center",
    justifyContent:"center"
  },

  welcomeText: {
    color: global.textColor,
    fontSize: 20,
    fontWeight: "600"
  },

  image:{
      width:width*0.3,
      height:width*0.3,
      marginTop:20
  },

  bottomContainer: {
    backgroundColor: global.backgroundColor,
    padding: 20,
    alignItems: "center",
  },

  titleText: {
    color: global.textColor,
    fontSize: 18,
    marginBottom:20,
  },

  signInBox:{
    paddingHorizontal:20,
    marginTop:10,
    flexDirection:"row",
    justifyContent:"center",
    width,
  },

  icon:{
    paddingTop:width*0.025,
    textAlign:"center",
    fontSize:30,
    color: "#868b93",
    backgroundColor: "#313440",
    width:width*0.125,
    height:width*0.125,
  },

  input: {
    marginLeft:2,
    backgroundColor: "#313440",
    color: "#868b93",
    fontSize:15,
    width:width *0.8,
    height:width * 0.125,
    paddingLeft:10
  },

  signInContainer:{
      alignItems:"flex-end",
      paddingHorizontal:15,
      width,
  },

  signIn:{
      flexDirection:"row",
      justifyContent:"center",
      backgroundColor: "#252630",
      height:width * 0.125,
      alignItems:"center",
      paddingHorizontal:15,
      width: width * 0.4,
      marginTop:10
  },

  signInIcon:{
    paddingTop:width*0.025,
    textAlign:"center",
    fontSize:30,
    color: "#868b93",
    marginLeft:15,
    height:width*0.125,
  },

  signInText:{
      color:global.textColor,
      fontSize:15,
      fontWeight:"500"
  }
});
