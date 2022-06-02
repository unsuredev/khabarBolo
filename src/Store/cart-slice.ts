import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemList: [],
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
            }
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
        },
        setShowCart(state) {
            state.showCart = !state.showCart;
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
