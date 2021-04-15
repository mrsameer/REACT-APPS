import React from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";

function CartTotal({getCount, getTotalPrice}) {
    return (
        <Container>
            <SubTotal>Subtotal ({getCount()} items):
                <NumberFormat value={getTotalPrice()} className="foo" displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={(value, props) => <div {...props}>{value}</div>} />
            </SubTotal>
            <CheckoutButton>Proceed to Checkout</CheckoutButton>
        </Container>
    )
}

export default CartTotal

const Container = styled.div`
    height: 200px;
    flex: 0.3;
    padding: 20px;
    background-color: white;
`

const CheckoutButton = styled.button`
  background-color: darkorange;
  width: 100%;
  padding: 4px 8px;
  cursor: pointer;
  border: 2px solid;
  border-radius: 4px;
  font-size: 16px;
  :hover {
    background: #ddb347;
  }
`

const SubTotal = styled.h2`
    margin-bottom: 16px;
`