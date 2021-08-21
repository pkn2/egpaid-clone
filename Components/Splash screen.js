import React from "react";
import { View, Dimensions, StyleSheet, Image } from "react-native";
const screenheight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

class splashscreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image style={styles.stretch} source={require("../asset/splash.jpg")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stretch: {
    width: screenWidth,
    height: screenheight,
    resizeMode: "stretch",
  },
});

export default splashscreen;
