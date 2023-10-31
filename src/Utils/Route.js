import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import Wishlist from'../Screens/Wishlist'
import Cart_screen from "../Screens/Cart_screen";
import Product_details_screen from "../Screens/Product_details_screen";
const Stack = createNativeStackNavigator();
const Route = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Wishlist" component={Wishlist} />
      <Stack.Screen name="Cart_screen" component={Cart_screen} />
      <Stack.Screen name="Product_details_screen" component={Product_details_screen} />
      {/* <Stack.Screen name='MessagePage' component={MessagePage}
        options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  );
};

export default Route;