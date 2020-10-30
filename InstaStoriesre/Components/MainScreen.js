import React, { Component } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import HomeTab from "./AppTabNavigator/HomeTab";
import SearchTab from "./AppTabNavigator/SearchTab";
import AddMediaTab from "./AppTabNavigator/AddMediaTab";
import LikesTab from "./AppTabNavigator/LikesTab";
import ProfileTab from "./AppTabNavigator/ProfileTab";
import DisplayStories from "./DisplayStories";
import SignIn from "../Form/SignIn";
import { createStackNavigator } from "react-navigation-stack";

import { createAppContainer } from "react-navigation";
import { Icon } from "native-base";

const AppTabNavigator = {
  SignIn: {
    screen: SignIn,
  },
  HomeTab: {
    screen: HomeTab,
  },
  SearchTab: {
    screen: SearchTab,
  },
  AddMediaTab: {
    screen: AddMediaTab,
  },
  LikesTab: {
    screen: LikesTab,
  },
  ProfileTab: {
    screen: ProfileTab,
  },
  DisplayStories: {
    screen: DisplayStories,
  },
};

const HomeStack = createStackNavigator(AppTabNavigator);
var HOc = createAppContainer(HomeStack);

class MainScreen extends Component {
  static navigationOptions = {
    headerLeft: <Icon name="ios-camera-outline" style={{ paddingLeft: 10 }} />,
    title: "Instagram",
    headerRight: <Icon style={{ paddingRight: 10 }} name="ios-send-outline" />,
  };

  render() {
    return <HOc />;
  }
}
export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
