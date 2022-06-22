import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        //@ts-ignore
        itemList: localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")): [],
        totalQuantity: 0,
        showCart: false,
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            //@ts-ignore
            const existingItem: any = state.itemList.find(
                (item: any) => item.id === newItem.id
            );
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
                toast.info(`Increased ${newItem.name} quantity`);
            } else {
                state.itemList.push({
                    //@ts-ignore
                    id: newItem.id,
                    //@ts-ignore
                    price: newItem.price,
                    //@ts-ignore
                    quantity: 1,
                    //@ts-ignore
                    totalPrice: newItem.price,
                    //@ts-ignore
                    name: newItem.name,
                });
                state.totalQuantity++;
                toast.success(`${newItem.name} added into Cart!`);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.itemList));
        },
        removeFromCart(state, action) {
            const itemId = action.payload;
            const existingItem:any = state.itemList.find(
                (item: any) => item.id === itemId
            )
            if (existingItem.quantity===1) {
                state.itemList = state.itemList.filter(
                    (item: any) => item.id !== itemId
                );
                state.totalQuantity--
            }else{
                existingItem.quantity--
                existingItem.totalPrice-=existingItem.price
            }
            localStorage.setItem("cartItems", JSON.stringify(state.itemList));
            toast.warn(`Item ${itemId} removed from cart !`);

        },
        setShowCart(state) {
            state.showCart = !state.showCart;
        },
        clearCart(state, action) {
            state.itemList = [];
            localStorage.setItem("cartItems", JSON.stringify(state.itemList));
            toast.error("Cart cleared!");
          }
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
