import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export const global = {
  textInputColor: "#868b93",
  inputColor: "#313440",
  backgroundColor: "#282a36",
  headerColor: "#3339bf",
  textColor: "#fafafa",
  font: "proxima_nova_regular",
  badColor:"#a1354c",
  goodColor:"#6bb210"
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
    justifyContent: "center"
  },

  welcomeText: {
    color: global.textColor,
    fontSize: 20,
    fontWeight: "600",
    fontFamily: global.font
  },

  image: {
    width: width * 0.3,
    height: width * 0.3,
    marginTop: 20
  },

  bottomContainer: {
    backgroundColor: global.backgroundColor,
    padding: 20,
    alignItems: "center"
  },

  titleText: {
    color: global.textColor,
    fontSize: 18,
    fontFamily: global.font,
    marginBottom: 20
  },

  signInBox: {
    paddingHorizontal: 20,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    width
  },

  icon: {
    paddingTop: width * 0.025,
    textAlign: "center",
    fontSize: 30,
    color: global.textInputColor,
    backgroundColor: "#313440",
    width: width * 0.125,
    height: width * 0.125
  },

  input: {
    marginLeft: 2,
    backgroundColor: global.inputColor,
    color: global.textInputColor,
    fontSize: 15,
    fontFamily: global.font,
    width: width * 0.8,
    height: width * 0.125,
    paddingLeft: 10
  },

  signInContainer: {
    alignItems: "flex-end",
    paddingHorizontal: 15,
    width
  },

  signIn: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#252630",
    height: width * 0.125,
    alignItems: "center",
    paddingHorizontal: 15,
    width: width * 0.4,
    marginTop: 10
  },

  signInIcon: {
    paddingTop: width * 0.025,
    textAlign: "center",
    fontSize: 30,
    color: global.textInputColor,
    marginLeft: 15,
    height: width * 0.125
  },

  signInText: {
    color: global.textColor,
    fontSize: 15,
    fontFamily: global.font,
    fontWeight: "500"
  }
});

export const bottomTab = StyleSheet.create({
  icon: {
    fontSize: 25,
    color: global.textColor
  }
});

export const home = StyleSheet.create({
  search: {
    paddingHorizontal: 10,
    backgroundColor: global.inputColor,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10
  },

  icon: {
    paddingTop: width * 0.025,
    textAlign: "center",
    fontSize: 30,
    color: global.textInputColor,
    width: width * 0.125,
    height: width * 0.125
  },

  input: {
    marginLeft: 2,
    color: global.textInputColor,
    fontSize: 15,
    fontFamily: global.font,
    height: width * 0.125,
    paddingLeft: 10
  },

  titleBox: {
    marginTop: 10,
    flexDirection: "row",
    marginBottom: 5,
  },

  titleText: {
    width:width*0.33,
    textAlign:"center",
    fontFamily: global.font,
    fontSize: 12,
    fontWeight:"bold",
    color: global.textInputColor
  },

  coinContainer:{
    height:height*0.8
  },

  coinBox: {
    marginTop: 5,
    paddingVertical: 10,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    elevation: 4,
    backgroundColor: global.inputColor
  },

  number: {
    width: width * 0.075,
    alignItems:"center",
  },

  numberText: {
    color: global.textColor,
    fontFamily: global.font,
    fontSize: 15,
    marginLeft:5,
  },

  coinNameBox: {
    flexDirection: "row",
    alignItems: "center",
    width: width * 0.3,
    marginLeft: 5
  },

  coinName: {
    flexDirection: "column"
  },

  coinImage: {
    width: width * 0.1,
    height: width * 0.1
  },

  coinText: {
    color: global.textColor,
    fontFamily: global.font,
    marginLeft: 10
  },

  priceText:{
    color: global.textColor,
    fontFamily: global.font,
    marginLeft: 20,
    textAlign:"right",
    width: width * 0.2,
    fontSize:15
  },

  percentText:{
    fontFamily: global.font,
    marginLeft: 20,
    textAlign:"right",
    width: width * 0.2,
    fontSize:15,
  }, 
});
