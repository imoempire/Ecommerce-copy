//import liraries
import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity,ActivityIndicator } from 'react-native';
import Header from '../Components/Header';
import Colors from '../Utils/Colors';
import image from '../Utils/Image';
import { AntDesign } from "@expo/vector-icons";
// create a component
const Cart_screen = () => {
    const [isLoading, setisLoading] = useState(false);
    //setisLoading(true);
    return (
        <SafeAreaView style={{backgroundColor:'#FFFFFF',height:'100%'}}>
            <Header headername={'Shopping Cart'} />
            <View style={styles.container}>

                <View style={{
                    height: 72,
                    justifyContent: 'space-between',
                    width: '95%',
                    // borderWidth: 1,
                    flexDirection: 'row',
                    borderBottomColor: '#EBEBFB',
                    borderBottomWidth: 0.5

                }}>
                    <View style={{
                        width: '10%', justifyContent: 'center',
                        // backgroundColor:'red'
                    }}>
                        <Image source={image.defaultImage} resizeMode="contain" style={styles.image} />
                    </View>
                    <View style={{
                        width: '50%', justifyContent: 'center', marginLeft: 20,
                        // backgroundColor:'yellow'
                    }}>
                        <Text style={{ color: Colors.grey_text, fontSize: 14, fontWeight: '500' }}>product name</Text>
                        <Text style={{ color: Colors.grey_text, fontSize: 14, fontWeight: '400' }}>$400</Text>
                    </View>


                    <View style={{
                        width: '35%',
                        // marginHorizontal:10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignSelf: 'center',

                        // backgroundColor:'yellow',
                        padding: 10
                    }}>
                        <TouchableOpacity
                        // onPress={() => navigation.navigate('Wishlist')}
                        >
                            <AntDesign
                                name="pluscircleo"
                                size={30}
                                color={Colors.black}
                            />
                        </TouchableOpacity>
                        <Text style={{ fontWeight: '500', fontSize: 16, color: Colors.grey_text, marginTop: 5 }}>2</Text>
                        <TouchableOpacity
                        // onPress={() => navigation.navigate('Wishlist')}
                        >
                            <AntDesign
                                name="minuscircleo"
                                size={30}
                                color={Colors.black}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
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
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 10,

        backgroundColor: '#FFFFFF'
    },
    image: {
        height: 30,
        width: 50,
        // backgroundColor:'red'

    },
});

//make this component available to the app
export default Cart_screen;
