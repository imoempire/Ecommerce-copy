import { ADD_TO_CART,REMOVE_TO_WISHLIST,ADD_TO_WISHLIST } from "./constants";
import { REMOVE_FROM_CART } from "./constants";

export function addToCart(item){
return {
    type: ADD_TO_CART,
    data:item
}
}

export function removeFromCart(item){
    return {
        type: REMOVE_FROM_CART,
        data:item
    }
    }

    // export function wishlistAdded(item){
    //     return {
    //         type: ADD_TO_WISHLIST,
    //         data:item
    //     }
    //     }

    //     export function wishlistRemoved(item){
    //         return {
    //             type: REMOVE_TO_WISHLIST,
    //             data:item
    //         }
    //         }