import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App({ navigation }) {
  var path = {
    str: navigation.state.params.string,
  };
  console.log(path.str);
  return (
    <View>
      <Text>hello</Text>
      <Image
        style={styles.tinyLogo}
        source={"../../assets/StoriesHeaderThumbnails/1.jpg"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    height: 400,
    width: 400,
  },
});
