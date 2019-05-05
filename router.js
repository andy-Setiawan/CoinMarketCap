import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { global, bottomTab } from "./src/assets/css/Style";
import { Icon } from "native-base";
import Home from "./src/components/main/Home";
import SignIn from "./src/components/auth/SignIn";
import CoinDetail from "./src/components/main/CoinDetail";
import Setting from "./src/components/main/Setting";

const signOut = createStackNavigator(
  {
    SignIn: {
      screen: SignIn
    }
  },
  { headerMode: "none" }
);

const HomeStack = createStackNavigator(
  {
    CoinDetail: {
      screen: CoinDetail
    }
  }
);

const signIn = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Coins",
        tabBarIcon: () => (
          <Icon type="Foundation" name="bitcoin-circle" style={bottomTab.icon} />
        )
      }
    },
    Setting: {
      screen: Setting,
      navigationOptions: {
        tabBarLabel: "Settings",
        tabBarIcon: () => (
          <Icon type="Ionicons" name="md-settings" style={bottomTab.icon} />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    shifting: true,
    activeColor: "#fafafa",
    inactiveColor: "#fafafa",
    barStyle: { backgroundColor: global.headerColor }
  }
);

const AppStack = createStackNavigator(
  {
    signOut: { screen: signOut },
    signIn: { screen: signIn },
    HomeStack: { screen: HomeStack }
  },
  { headerMode: "none", initialRouteName: "signOut" }
);
export const Navigation = createAppContainer(AppStack);
