import React from "react";
import styled from 'styled-components';
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";

function Cart({cartItems}) {
    const getTotalPrice = () => {
        let total = 0;
        cartItems.forEach((item)=>{
            total += item.product.quantity * item.product.price
        })
        return total
    }

    // cartItems is a state so that we should not use hook
    const getCount = () => {
        let count = 0;
        // Loop through all cart items
        cartItems.forEach((item) => {
            // add the quantity of the cartItem to the total
            count += item.product.quantity;
        })
        return count;
    }

    return (
        <Container>
            <CartItems cartItems={cartItems}/>
            <CartTotal getCount = {getCount} getTotalPrice={getTotalPrice}/>
        </Container>
    )
}

export default Cart;

const Container = styled.div`
    display: flex;
    padding: 14px 18px 0 18px;
    align-items: flex-start;
`