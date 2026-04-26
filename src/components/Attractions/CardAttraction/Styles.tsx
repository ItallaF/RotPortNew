import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
  containerConteudo: {
    flex: 1,
  },
  buttonTextStyle: {
    color: theme.colors.textPrimary,
    fontSize: 20,
  },
  img: {
    width: 350,
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  texImage: {
    color: theme.colors.textPrimary,
    fontSize: 16,
    marginTop: 5,
  },
});