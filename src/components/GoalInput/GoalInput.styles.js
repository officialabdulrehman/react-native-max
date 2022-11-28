import { StyleSheet } from "react-native";

export const goalInputStyles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#eee",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    color: '#ccc',
    backgroundColor: "#fff",
    width: "71%",
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "60%",
    marginTop: 30
  },
  button: {
    width: "40%",
  }
});