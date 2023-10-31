//import liraries
import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView ,TouchableOpacity,Platform, ScrollView,ActivityIndicator} from 'react-native';
import Header from '../Components/Header';
import { ImageSlider } from "react-native-image-slider-banner";
import Colors from '../Utils/Colors';
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { addToCart,removeFromCart } from '../redux/action';
import { useDispatch,useSelector } from 'react-redux';
// create a component
const Product_details_screen = (props) => {
    const navigation = useNavigation()
    const dispatch = useDispatch();
   const  productData = props.route.params.productData
// console.log('product data',productData)
    const [isFavourite, setisFavourite] = useState(true);
    const [imageSlider, setimageSlider] = useState([]);
    const [isLoading, setisLoading] = useState(false);  
      const [isAdded, setIAdded] = useState(false)

    useEffect(() => {
      const unsubscribe = navigation.addListener("focus", () => {
        imagArray();
      });
      return unsubscribe;
    }, [navigation]);

    const imagArray =()=>{
      const arr=productData.images
      const response = arr.map(item=>{ return {img: item}})
      
       console.log('response img',response)
       setimageSlider(response)
     }

     const item =productData
     const cartItem = useSelector((state) => state.reducer)
 
     const HandleAddCart = () => {
        //  console.warn('add to cart',item)
         dispatch(addToCart(item))
     }
 
     const handleRemoveCart =(item)=>{
         // console.warn(item)
         dispatch(removeFromCart(item.title))  // we can use id to remove bulk data
     }
     useEffect(() => {
         if (cartItem && cartItem.length) {
             cartItem.forEach(element => {
                 // console.warn(element)
                 if (element.title === item.title) {
                     setIAdded(true)
                 }
             });
         }
     }, [cartItem])

    return (
      <SafeAreaView style={{backgroundColor:'#FFFFFF',height:'100%'}}>
            <Header headername={'Product Details'} />
            <ScrollView>
            <View style={styles.container}>
        
        <View style={{height:'auto',width:'auto',marginHorizontal:10}}>
        <Text style={{ fontWeight: '400', fontSize:50, color: Colors.grey_text, }}>{productData.title}</Text>
        <Text style={{ fontWeight: '400', fontSize:15, color: Colors.grey_text }} >Rating  {productData.rating}/5</Text>
        </View>
            <View style={{ top: 0, minHeight: 280, }}>
          
                   <ImageSlider
            data={imageSlider}
            // defaultSource={require('../../Assets/splash.png')}
            autoPlay={true}
            localImg={false}
            showIndicator={true}
            indicatorContainerStyle={{
              top: 5,
            }}
            preview={false}
          />
                 <View
              style={{
                justifyContent: "space-between",
                // flexDirection: "row",
                marginTop: Platform.OS === "android" ? 5 : 10,
                position: "absolute",
                width: "100%",
                height: 45,
                alignItems: 'flex-end',
                paddingHorizontal: Platform.OS === "android" ? 15 : 20,
              }}
            >
              <TouchableOpacity
                // onPress={() => Add_remove_BrandFav(isFavourite)}
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  backgroundColor: Colors.white,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth:0.1,
                  borderColor:Colors.grey_text_light,
                  elevation:1,
                }}
              >
                <AntDesign
                  name="heart"
                  size={22}
                  color={isFavourite ? "red" : "black"}
                />
              </TouchableOpacity>

            </View>
        </View>
             
                <View style={{ marginHorizontal: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: '700', color: Colors.theme_color }}>${productData.price}</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginVertical: 20 }}>

                    {/* {isAdded ?
                        <TouchableOpacity style={styles.button_view}  onPress={() => handleRemoveCart(item)}>
                            <Text style={styles.button_txt}>Remove To Cart</Text>
                        </TouchableOpacity>:
                        <TouchableOpacity style={styles.button_view} onPress={() => HandleAddCart(item)}>
                            <Text style={styles.button_txt}>Add To Cart</Text>
                        </TouchableOpacity>} */}

                        <View style={{ height: 56, width: '48%', borderRadius: 20, borderColor: Colors.theme_color, backgroundColor: Colors.theme_color, borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: Colors.white, fontSize: 14, fontWeight: 600 }}>Buy Now</Text>
                        </View>
                    </View>
                    <View style={{height:'auto',width:'90%'}}>
                        <Text style={{ fontWeight: '400', fontSize: 16, color: Colors.grey_text }}>Details</Text>
                        <Text style={{ fontWeight: '400', fontSize: 14, color: Colors.grey_text_light, lineHeight: 24 }}>{productData.description}</Text>
                    </View>

                </View>

            </View>
            </ScrollView>
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
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: Colors.white,
    },
    button_view:{
      height: 56, width: '48%', borderRadius: 20, borderColor: Colors.theme_color, 
      backgroundColor: Colors.white, borderWidth: 1, justifyContent: 'center', alignItems: 'center'
    },
    button_txt:{
      color: Colors.theme_color, fontSize: 14, fontWeight: 600
    }
});

//make this component available to the app
export default Product_details_screen;
