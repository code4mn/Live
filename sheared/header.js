import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
export default function Header() {
  const openMenu = () => {};
  return (
    <View style={Styles.header}>
      <MaterialIcons name='menu' size={28} onPress={} style={styles.icon} />
      <View>
        <Text style={styles.headerText}>Game Zone</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    with: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff00a5",
  },
  headerText: {
    fontWeight: "bold",
    fontsize: "20",
    color: "#fff",
    letterSpacing: "1",
  },
  icon: {},
});
