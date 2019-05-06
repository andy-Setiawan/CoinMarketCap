import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
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

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },

  CoinDetail: {
    screen: CoinDetail
  }
});

const signIn = createMaterialBottomTabNavigator(
  {
    HomeStack: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: "Coins",
        tabBarIcon: () => (
          <Icon type="FontAwesome5" name="coins" style={bottomTab.icon} />
        )
      }
    },
    Setting: {
      screen: Setting,
      navigationOptions: {
        tabBarLabel: "Settings",
        tabBarIcon: () => (
          <Icon type="MaterialIcons" name="settings" style={bottomTab.icon} />
        )
      }
    }
  },
  {
    initialRouteName: "HomeStack",
    shifting: true,
    activeColor: "#fafafa",
    inactiveColor: "#fafafa",
    barStyle: { backgroundColor: global.headerColor }
  }
);

const AppStack = createSwitchNavigator(
  {
    signOut: { screen: signOut },
    signIn: { screen: signIn }
  },
  {
    headerMode: "none",
    initialRouteName: "signOut",
    backBehavior: "none"
  }
);
export const Navigation = createAppContainer(AppStack);
