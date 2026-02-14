import { colors } from "@/src/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
  },
  title: {
    fontSize: 22,
    color: colors.green[900],
  },
  header: {
    paddingHorizontal: 24,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  logo: {
    height: 32,
    width: 38,
  },
});
