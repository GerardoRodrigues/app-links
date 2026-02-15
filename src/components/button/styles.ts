import { colors } from "@/src/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor:colors.green[300],
    height: 52,
    width: "100%",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: colors.green[900],
    fontSize: 16,
    fontWeight: "600",
  },
});
