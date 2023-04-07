import React from 'react';
import './Tshirt.css';

const Tshirt = ({ tshirt, handlerBuyNowClick }) => {
    const { picture, name, price } = tshirt;
    return (
        <div className='tshirt-container'>
            <img src={picture} alt="" />
            <h5>{name}</h5>
            <p>Price: ${price}</p>
            <button onClick={() => handlerBuyNowClick(tshirt)} className='btn-buy-now'>Buy Now</button>
        </div>
    );
};

export default Tshirt;