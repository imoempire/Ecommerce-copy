import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  cart: [],
  wishlist: [],
};

export const Reducer = createSlice({
  name: "reducer",
  initialState,
  reducers: {
    allProduct: (state, { payload }) => {
      state.product = payload;
    },
    addToCart: (state, { payload }) => {
      // Find the product in the cart, if it already exists
      const existingProduct = state.cart.find(
        (product) => product.id === payload.id
      );

      if (existingProduct) {
        // If the product exists, increase the quantity
        existingProduct.quantity += 1;
      } else {
        // If the product doesn't exist in the cart, add it with quantity 1

        state.cart.push(payload);
      }
    },
    increaseQuantity: (state, { payload }) => {
      const productToIncrease = state.cart.find(
        (product) => product.id === payload.id
      );
      if (productToIncrease) {
        productToIncrease.quantity += 1;
      }
    },
    decreaseQuantity: (state, { payload }) => {
      const productToDecrease = state.cart.find(
        (product) => product.id === payload.id
      );
      if (productToDecrease) {
        if (productToDecrease.quantity > 1) {
          productToDecrease.quantity -= 1;
        } else {
          state.cart = state.cart.filter(
            (product) => product.id !== payload.id
          );
        }
      }
    },
    restDat: (state, { payload }) => {
      return initialState;
    },
    addWishlist: (state, { payload }) => {
      // Get the payload (product object)
      const product = payload;

      // Check if the product is already in the product array
      const productIndex = state.product.findIndex(
        (item) => item.id === product.id
      );

      if (productIndex !== -1) {
        // If the product is in the product array, toggle the 'inWishlist' property
        state.product[productIndex].inWishlist =
          !state.product[productIndex].inWishlist;

        // Check if the product is already in the wishlist
        const wishlistIndex = state.wishlist.findIndex(
          (item) => item.id === product.id
        );

        if (state.product[productIndex].inWishlist) {
          // If the product is in the wishlist, remove it
          if (wishlistIndex === -1) {
            state.wishlist.push(product);
          }
        } else {
          // If the product is not in the wishlist, add it
          if (wishlistIndex !== -1) {
            state.wishlist.splice(wishlistIndex, 1);
          }
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  addWishlist,
  allProduct,
  restDat,
  increaseQuantity,
  decreaseQuantity,
} = Reducer.actions;

export default Reducer.reducer;

// import { ADD_TO_CART,REMOVE_FROM_CART } from "./constants";
// const initialState = [];

// export const reducer = (state = initialState, action) => {
//     switch (action.type) {

//         case ADD_TO_CART:
//             return [
//                 ...state,
//                 action.data
//             ]

//             case REMOVE_FROM_CART:
//                 let result =state.filter(item=>{
//                     return item.title!=action.data
//                 })
//                 return [
//                     ...result
//                 ]

//                 // case ADD_TO_WISHLIST:
//                 //     return [
//                 //         ...state,
//                 //         action.data
//                 //     ]
//                 //     case REMOVE_TO_WISHLIST:
//                 //         let WishlistResult =state.filter(item=>{
//                 //             return item.name!=action.data
//                 //         })
//                 //         return [
//                 //             ...WishlistResult
//                 //         ]
//         default:
//             return state
//     }
// }
