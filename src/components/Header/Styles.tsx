import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    height: 150,
    padding: 10,
    overflow: "hidden"
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgb(253, 253, 253)"
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconButton: {
    borderRadius: 12,
    height: 40,
    width: 40,
    marginTop: 50,
    marginLeft: 20,
  },
  avatar: {
    borderRadius: 50,
    height: 40,
    width: 40,
    marginTop: 50,
    marginRight: 20,
  },
  content: {
    marginTop: 50,
  },
  title: {
    color: "#3fb9df",
    fontSize: 22,
    fontWeight: "700"
  },
  subtitle: {
    color: "#3fb9df",
    fontSize: 14
  }
});
