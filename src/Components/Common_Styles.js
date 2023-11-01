import { Platform } from "react-native";
import Colors from "../Utils/Colors";
export default {
  mainbackBtn: {
    width: "15%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  maintooltxt: {
    width: "70%",
    fontSize: 16,
    color: "black",
    alignSelf: "center",
    textAlign: "center",
    fontWeight: "bold",
  },
  maintoolblankview: {
    width: "15%",
    height: 50,
  },
  button_view: {
    height: 56,
    width: "48%",
    borderRadius: 20,
    borderColor: Colors.theme_color,
    backgroundColor: Colors.theme_color,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button_txt: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: 600,
  },
};