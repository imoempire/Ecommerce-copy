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
      state.cart.push(payload);
    },
    restDat: (state, { payload }) => {
      return initialState;
    },
    addWishlist: (state, { payload }) => {
      // Get the payload (product object)
      const product = payload;

      // Check if the product is already in the wishlist
      const productIndex = state.product.findIndex(
        (item) => item.id === product.id
      );

      // Check if the product is already in the wishlist
      const wishlistIndex = state.wishlist.findIndex(
        (item) => item.id === product.id
      );

      if (wishlistIndex !== -1) {
        // If the product is in the wishlist, remove it
        state.wishlist.splice(wishlistIndex, 1);
      } else {
        // If the product is not in the wishlist, add it
        state.wishlist.push(product);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, addWishlist, allProduct, restDat } = Reducer.actions;

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
