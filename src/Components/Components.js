import { FlatList, Text, View, useWindowDimensions } from "react-native";
import Colors from "../Utils/Colors";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export const LocationTime = ({ title }) => {
  return (
    <View style={{ justifyContent: "space-between", marginVertical: 5 }}>
      <Text
        style={{
          color: Colors.white,
        }}
      >
        DEVLIVERY TO
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          style={{
            color: Colors.white,
          }}
        >
          {title}
        </Text>
        <AntDesign
          style={{ marginHorizontal: 5 }}
          name="down"
          size={10}
          color={Colors.white}
        />
      </View>
    </View>
  );
};

const data = [
  {
    id: 1,
    percentage: "50%",
    description: "Get 50% OFF",
    on: "On first 3 order",
    color: "#ECB246",
  },
  {
    id: 1,
    percentage: "70%",
    description: "Get 50% OFF",
    on: "On first 3 order",
    color: "#E3DDCB",
  },
];

export const Recommended = () => {
  const { width } = useWindowDimensions();
  return (
    <View>
      <FlatList
        data={data}
        horizontal={true}
        style={{
          // flex: 1,
          marginVertical: 10,
          //   flexDirection: "row",
          //   flexWrap: "wrap",
          //   paddingBottom: 100,
          //   backgroundColor: "red",
          //   marginHorizontal: 20,
          width: "100%",
        }}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                backgroundColor: item?.color,
                width: width * 0.6,
                height: 130,
                borderRadius: 10,
                marginHorizontal: 10,
                // alignItems: "center",
                justifyContent: "center",
                padding: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ justifyContent: "center", width: "40%" }}>
                <Ionicons name="image-outline" size={60} color="white" />
              </View>
              <View style={{ justifyContent: "center", width: "60%" }}>
                <Text style={{ color: "white", fontSize: 15, }}>Get</Text>
                <Text style={{ color: "white", fontSize: 20, fontWeight: "600", lineHeight: 25 }}>{item.percentage} OFF</Text>
                <Text style={{ color: "white" , fontSize: 15,}}>{item?.on}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
