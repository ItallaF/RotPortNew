import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    height: 80,
    overflow: "hidden"
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: theme.colors.surface,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconButton: {
    height: 40,
    width: 40,
    marginTop: 35,
    marginLeft: 20,
  },
  avatar: {
    height: 40,
    width: 40,
    marginTop: 35,
    marginRight: 20,
  },
  content: {
    marginTop: 35,
  },
  title: {
    color: theme.colors.gradient[0],
    fontSize: theme.typography.h2.fontSize,
    fontWeight: "700"
  },
  subtitle: {
    color: theme.colors.gradient[1],
    fontSize: theme.typography.body.fontSize,
  }
});
