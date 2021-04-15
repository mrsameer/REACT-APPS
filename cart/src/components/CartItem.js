import React from "react";

// creation of very first class component 

class CartItem extends React.Component {
    render (){
        return(
            <div className = 'cart-item'>
                <div className = 'left-block'>
                    <img style = {styles.image}/>
                </div>
                <div className = 'right-block'>
                    <div style = {{fontSize: 25}}>Phone</div>
                    <div style = {{color: "#777"}}>Price: 999</div>
                    <div style = {{color: "#777"}}>Quantity: 1</div>
                    <div className='cart-item-actions'>

                    </div>
                </div>
            </div>
        )
    }
}

// for styling in jsx 
const styles= {
    // property 
    image: {
      height: 110,
      width: 110, 
      borderRadius: 4,
      background: "#ccc"
    }
  } // sytle object 
  
export default CartItem