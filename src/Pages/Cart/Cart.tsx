import { getNodeText } from '@testing-library/react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector((state: any) => state.cart.itemList)

    const dispatch = useDispatch()
  
  

    return (
        <div>
            <h3>Cart</h3>
            <div className="cartWrapper">
                {cartItems.map((product:any) => (
                    <div key={product.id} className="cartCard">
                        <img src={product.image} alt={product.title} />
                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
