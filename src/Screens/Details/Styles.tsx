import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundDark,
  },
  containerContent: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  image: {
    width: "100%",
    height: 400,
    marginTop: theme.spacing.md,
  },
});