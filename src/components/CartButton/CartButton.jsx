import React, { useContext } from 'react';
import { BsCart3 } from 'react-icons/bs';

import './CartButton.css';
import AppContext from '../../context/AppContext';

function CartButton() {

    const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext)
    return(
        <button type='button' className='cart__button' onClick={ () => setIsCartVisible(!isCartVisible) }>
            <BsCart3 />
            {cartItems.length > 0 && <span className='cart_status'>{cartItems.length}</span>}
        </button>
    );
}

export default CartButton;