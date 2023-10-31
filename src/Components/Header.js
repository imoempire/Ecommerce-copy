import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import Common_Styles from "./Common_Styles";
import { useNavigation } from "@react-navigation/native";
import Colors from "../Utils/Colors";
import { StatusBar } from "expo-status-bar";
const Header = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.maintoolview}>
      <StatusBar backgroundColor={Colors.white} />
      <TouchableOpacity
        style={Common_Styles.mainbackBtn}
        onPress={() =>
          props.onPress
            ? navigation.navigate(props.onPress)
            : navigation.goBack()
        }
      >
        <Entypo name={"chevron-small-left"} size={40} color={"black"} />
      </TouchableOpacity>

      <Text style={Common_Styles.maintooltxt}>{props.headername}</Text>

      <View style={Common_Styles.maintoolblankview} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  maintoolview: {
    width: "100%",
    height: 55,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: "white",
    borderBottomWidth: 2,
    borderBottomColor: "#E7E7E7",
    marginTop: 22
  },
});
