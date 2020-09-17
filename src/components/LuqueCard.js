import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function LuqueCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.luque}>Luque</Text>
          <Text style={styles.subtitleHere}>
            Puerto Pinasco y Sexta, Barrio Laurelty.
          </Text>
        </View>
      </View>
      <Image
        source={require("../assets/images/marker3.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "rgba(193,193,193,1)",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1
  },
  luque: {
    fontFamily: "open-sans-700",
    fontSize: 24,
    color: "rgba(255,255,255,1)",
    paddingBottom: 12,
    marginLeft: 45
  },
  subtitleHere: {
    fontFamily: "roboto-regular",
    fontSize: 14,
    color: "rgba(255,255,255,1)",
    lineHeight: 16
  },
  image: {
    top: -1,
    left: 16,
    width: 34,
    height: 74,
    position: "absolute",
    transform: [
      {
        rotate: "-2.00deg"
      }
    ]
  }
});

export default LuqueCard;
