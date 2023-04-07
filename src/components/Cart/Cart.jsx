import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please add some Products.</p>
    }
    return (
        <div>
            <h2>This Cart Component.= {cart.length}</h2>
            {message}
            {
                cart.map(tshirt => <h5
                    key={tshirt._id}

                >{tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt._id)}>x</button></h5>)
            }
        </div>
    );
};

export default Cart;