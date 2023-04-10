import React from 'react';

const Cart = ({cart, removeFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some Product!!!</p>
    }
    else{
        message = <p>Thanks for wasting your money!!</p>
    }
    return (
        <div>
            <h2>Order Summary: {cart.length}</h2>
            {cart.length > 2 ? <span>Aro kino!</span> : <span>Fokir!</span>}
            {message}
            {
                cart.map(tshirt=> <p 
                    key={tshirt._id}
                
                >{tshirt.name} <button onClick={() => removeFromCart(tshirt._id)}>x</button></p>)
            }
            {
                cart.length === 2 && <p>double bonanza!!</p>
            }
            {
                cart.length === 3 && <p>tinta holo na!!</p>
            }
        </div>
    );
};

export default Cart;