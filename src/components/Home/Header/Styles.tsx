import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
  header: {
      height: 240,
      justifyContent: "flex-end",
    },
  
    overlay: {
      padding: theme.spacing.xl,
      backgroundColor: "#0000004d",
    },
  
    headerTitle: {
      color: theme.colors.textLight,
      fontSize: theme.typography.h1.fontSize,
      fontWeight: theme.typography.h1.fontWeight as any,
    },
  
    headerSubtitle: {
      color: theme.colors.textLight,
      marginTop: theme.spacing.xs,
    },
});