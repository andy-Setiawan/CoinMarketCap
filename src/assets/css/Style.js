import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export const global = {
  textInputColor: "#868b93",
  inputColor: "#313440",
  backgroundColor: "#282a36",
  headerColor: "#3339bf",
  textColor: "#fafafa",
  font: "proxima_nova_regular",
  badColor: "#a1354c",
  goodColor: "#6bb210"
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: global.backgroundColor,
    flex: 1
  },

  header: {
    backgroundColor: global.headerColor,
    padding: 10,
    flexDirection: "row"
  },

  headerBox: {
    flexDirection: "row",
    width: width * 0.8,
    justifyContent: "center",
    alignItems: "center"
  },

  headerLogo: {
    width: width * 0.075,
    height: width * 0.075
  },

  headerText: {
    marginLeft: 10,
    fontSize: 18,
    color: global.textColor,
    fontWeight: "bold",
    fontFamily: global.font
  },

  headerIcon: {
    fontSize: 30,
    color: global.textColor,
    width: width * 0.1
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
    width,
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
    marginBottom: 5
  },

  titleText: {
    width: width * 0.33,
    textAlign: "center",
    fontFamily: global.font,
    fontSize: 12,
    fontWeight: "bold",
    color: global.textInputColor
  },

  coinContainer: {
    height: height * 0.8
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
    alignItems: "center"
  },

  numberText: {
    color: global.textColor,
    fontFamily: global.font,
    fontSize: 15,
    marginLeft: 5
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

  priceText: {
    color: global.textColor,
    fontFamily: global.font,
    marginLeft: 20,
    textAlign: "right",
    width: width * 0.2,
    fontSize: 15
  },

  percentText: {
    fontFamily: global.font,
    marginLeft: 20,
    textAlign: "right",
    width: width * 0.2,
    fontSize: 15
  }
});

export const coin = StyleSheet.create({
  priceBox: {
    margin: 20
  },

  priceText: {
    fontFamily: global.font,
    fontWeight: "bold",
    fontSize: 18,
    color: global.textColor
  },

  percentBox: {
    marginTop: 10,
    flexDirection: "row"
  },

  percentText: {
    fontFamily: global.font,
    fontSize: 15,
    fontWeight: "bold"
  },

  pastText: {
    fontFamily: global.font,
    fontWeight: "600",
    fontSize: 15,
    color: global.textInputColor
  },

  detailContainer: {
    backgroundColor: global.inputColor,
    paddingHorizontal: 20
  },

  detailBox: {
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: global.textInputColor
  },

  detailText: {
    color: global.textColor,
    fontFamily: global.font,
    fontSize: 15,
    fontWeight: "600"
  },

  valueText: {
    color: global.textColor,
    fontFamily: global.font,
    fontSize: 15,
    fontWeight: "bold"
  },

  iconBox: { flexDirection: "row", alignItems: "center" },

  detailIcon: {
    fontSize: 30,
    fontWeight: "bold",
    width: width * 0.1,
    color: global.headerColor
  },

  aboutBox: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: global.textInputColor
  },

  detailTitle: {
    color: global.textColor,
    fontFamily: global.font,
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10
  },

  detailAbout: {
    color: global.textColor,
    fontFamily: global.font,
    fontSize: 15
  },

  viewText: {
    marginTop: 10,
    textAlign: "right",
    color: global.textColor,
    fontFamily: global.font,
    fontSize: 15,
    opacity: 4
  }
});

export const setting = StyleSheet.create({
  userTitle: {
    color: global.textInputColor,
    fontFamily: global.font,
    fontSize: 15,
    fontWeight: "500",
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 10
  },

  settingBox: {
    flexDirection: "row",
    backgroundColor: global.inputColor,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10
  },

  settingText: {
    color: global.textColor,
    fontFamily: global.font,
    fontSize: 15,
    fontWeight: "500"
  },

  valueBox: {
    flexDirection: "row",
    alignItems: "center"
  },

  valueText: {
    color: global.textColor,
    fontFamily: global.font,
    fontSize: 12,
    fontWeight: "bold"
  },

  icon: {
    fontSize: 20,
    color: global.textColor,
    marginLeft: 10
  }
});
