//import liraries
import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet,SafeAreaView,Pressable, TouchableOpacity,Image,ActivityIndicator} from 'react-native';
import Header from '../Components/Header';
import { Card } from "react-native-paper";
import Colors from '../Utils/Colors';
import { AntDesign } from "@expo/vector-icons";
import image from '../Utils/Image';
// create a component
const Wishlist = () => {
    const [isLoading, setisLoading] = useState(false);
    // setisLoading(true);
    return (
        <SafeAreaView style={{backgroundColor:'#FFFFFF',height:'100%',width:'100%'}}>
            <Header headername={'Wishlist Screen'} />
            <View style={styles.container}>

            <View style={styles.container}>
<Pressable onPress={() => navigation.navigate('Product_details_screen')}>
            <Card  >
                <View
                    style={{
                        height: 194,
                        width: 150,
                        borderRadius: 12,
                        // backgroundColor: '#FFFFFF',
                        margin: 10,
                        padding: 10,
                        // borderWidth: 0.5,
                    }}
                >
                    <TouchableOpacity
                    // onPress={() => navigation.navigate('Wishlist')} 
                    >
                        <AntDesign
                            name="hearto"
                            size={20}
                            color='red'
                        />
                    </TouchableOpacity>

                    <Image
                        source={{
                            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
                        }}
                        resizeMode={'contain'}
                          defaultSource={image.defaultImage}
                        style={{ height: 70, width: 70, alignSelf: 'center', marginVertical: 10 }}
                    />

                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
                    <Text style={{ fontWeight: '600', fontSize: 14, lineHeight: 20 }}>$300</Text>
                    <TouchableOpacity
                    // onPress={() => navigation.navigate('Wishlist')} 
                    >
                        <AntDesign
                            name="pluscircle"
                            size={20}
                            color={Colors.theme_color}
                        />
                    </TouchableOpacity>
                    </View>

                    <Text style={styles.product_name}>product name</Text>

                </View>
            </Card>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Product_details_screen')}>
            <Card >
                <View
                    style={{
                        height: 194,
                        width: 150,
                        borderRadius: 12,
                        // backgroundColor: '#FFFFFF',
                        margin: 10,
                        padding: 10,
                        // borderWidth: 0.5,
                    }}
                >
                    <TouchableOpacity
                    // onPress={() => navigation.navigate('Wishlist')} 
                    >
                        <AntDesign
                            name="hearto"
                            size={20}
                            color='red'
                        />
                    </TouchableOpacity>

                    <Image
                        source={{
                            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
                        }}
                        resizeMode={'contain'}
                          defaultSource={image.defaultImage}
                        style={{ height: 70, width: 70, alignSelf: 'center', marginVertical: 10 }}
                    />

                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
                    <Text style={{ fontWeight: '600', fontSize: 14, lineHeight: 20 }}>$300</Text>
                    <TouchableOpacity
                    // onPress={() => navigation.navigate('Wishlist')} 
                    >
                        <AntDesign
                            name="pluscircle"
                            size={20}
                            color={Colors.theme_color}
                        />
                    </TouchableOpacity>
                    </View>

                    <Text style={styles.product_name}>product name</Text>

                </View>
            </Card>
            </Pressable>
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
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        // marginHorizontal:15,
        width:'100%',
        justifyContent:'space-evenly',
        marginVertical:10,
    },
    header: {
        height: 60,
        backgroundColor: Colors.theme_color,
        justifyContent: 'center',
        marginTop: 20,
        padding: 10,
        flexDirection: 'row'
    },
    image: {
        height: 20,
        width: 50,

    },
    product_name: {
        fontSize: 12,
        fontWeight: '300',
        lineHeight: 16,
        color:'#616A7D'
    }
});

//make this component available to the app
export default Wishlist;
