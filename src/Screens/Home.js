//import liraries
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Colors from "../Utils/Colors";
import image from "../Utils/Image";
import { StatusBar } from "expo-status-bar";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Badge, Card } from "react-native-paper";
import axios from "axios";
// import { addToCart, removeFromCart } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addWishlist, allProduct, restDat } from "../redux/reducer";

// create a component
const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isFavourite, setisFavourite] = useState(false);
  const [isAdded, setIAdded] = useState(false);
  const [productData, setProductData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    // dispatch(restDat());
    setisLoading(true);
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        let data = res.data?.products;
        setProductData(data);
        dispatch(allProduct(data));
      })
      .catch((err) => console.log(err));
    setisLoading(false);
  }, []);

  //   const Productitem = productData;

  const HandleAddCart = (product) => {
    dispatch(addToCart(product));
  };

  const HandleAddWishList = (product) => {
    dispatch(addWishlist(product));
  };

  // const handleRemoveCart =(item)=>{
  //     // console.warn(item)
  //     dispatch(removeFromCart(item.name))  // we can use id to remove bulk data
  // }

  //   useEffect(() => {
  //     if (product && product.length) {
  //       product.forEach((element) => {
  //         if (element.title === item?.title) {
  //           setIAdded(true);
  //         }
  //       });
  //     }
  //   }, [product]);

  const { product, cart, wishlist } = useSelector((state) => state.reducer);
  const inCart = cart?.length;
  const inWishList = wishlist?.length;

  // console.log(cart, wishlist, product?.length);

  const renderItemProduct = ({ item }) => {
    let isFav = item?.inWishlist;
    return (
      <View style={styles.container}>
        <Pressable
          onPress={() =>
            navigation.navigate("Product_details_screen", { productData: item })
          }
        >
          <Card>
            <View
              style={{
                height: 194,
                width: 150,
                borderRadius: 12,
                margin: 10,
                padding: 10,
              }}
            >
              <TouchableOpacity onPress={() => HandleAddWishList(item)}>
                {isFav ? (
                  <AntDesign name="heart" size={20} color={"red"} />
                ) : (
                  <AntDesign name="hearto" size={20} color={Colors.black} />
                )}
              </TouchableOpacity>
              <Image
                source={{ uri: item?.thumbnail }}
                resizeMode={"contain"}
                defaultSource={image.defaultImage}
                style={{
                  height: 70,
                  width: 70,
                  alignSelf: "center",
                  marginVertical: 5,
                }}
              />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 15,
                }}
              >
                <Text
                  style={{ fontWeight: "600", fontSize: 14, lineHeight: 20 }}
                >
                  ${item.price}
                </Text>
                <TouchableOpacity onPress={() => HandleAddCart(item)}>
                  <AntDesign
                    name="pluscircle"
                    size={20}
                    color={Colors.theme_color}
                  />
                </TouchableOpacity>
              </View>

              <Text style={styles.product_name}>{item.title}</Text>
            </View>
          </Card>
        </Pressable>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: "#FFFFFF", height: "100%", width: "100%" }}
    >
      <StatusBar backgroundColor={Colors.theme_color} />
      <View style={styles.header}>
        <View
          style={{
            width: "50%",
            // backgroundColor:'red'
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: Colors.white,
              fontWeight: "bold",
              marginTop: 3,
            }}
          >
            Hey,Yajash
          </Text>
        </View>
        <View
          style={{
            width: "50%",
            flexDirection: "row",
            // backgroundColor:'green',
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => navigation.navigate("Wishlist")}
          >
            <AntDesign name="hearto" size={22} color={Colors.white} />
            <Badge style={{ top: -10, left: -5 }} size={20}>
              {inWishList}
            </Badge>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: "row", marginHorizontal: 10 }}
            onPress={() => navigation.navigate("Cart_screen")}
          >
            {/* <Image
              source={image.cart}
              resizeMode="contain"
              style={styles.image}
            /> */}
            <SimpleLineIcons name="handbag" size={22} color={Colors.white} />
            <Badge style={{ top: -10, left: -5 }} size={20}>
              {inCart}
            </Badge>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <FlatList
          data={product}
          style={{
            marginVertical: 10,
            flexDirection: "row",
            flexWrap: "wrap",
            marginBottom: 100,
          }}
          keyExtractor={(item, index) => index}
          renderItem={renderItemProduct}
          numColumns={2}
        />
      </View>
      {isLoading ? (
        <ActivityIndicator
          style={{
            position: "absolute",
            bottom: 0,
            top: 0,
            left: 0,
            right: 0,
          }}
          color="black"
          size="large"
        />
      ) : null}
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 15,
    marginVertical: 10,
  },
  header: {
    height: 60,
    backgroundColor: Colors.theme_color,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    padding: 10,
    flexDirection: "row",
  },
  image: {
    height: 20,
    width: 50,
  },
  product_name: {
    fontSize: 12,
    fontWeight: "300",
    lineHeight: 15,
    color: "#616A7D",
    marginVertical: 5,
    // paddingVertical:5
    // paddingVertical:5
    // padding:5
    // margin:5
  },
});

//make this component available to the app
export default Home;
