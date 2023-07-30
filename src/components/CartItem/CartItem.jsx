import React, { useContext } from "react";
import propTypes from "prop-types";
import { BsCartDashFill } from 'react-icons/bs';

import './CartItem.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from "../../context/AppContext";

function CarItem({ data }) {

    const { cartItems, setCartItems } = useContext(AppContext);
    const { id, thumbnail, title, price  } = data;
    const handleRemoveItem = () => {
        const updateItems = cartItems.filter((item) => item.id !== id );
        setCartItems(updateItems);
    };

    return (
        <section className="cart-item">
            <img 
                src={thumbnail}
                alt="Imagem do produto" 
                className="cart-item-image" 
            />

            <div className="cart-item-content">
                <h3 className="cart-item-title">{title}</h3>
                <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>

                <button type="button" className="button__remove-item" onClick={ handleRemoveItem }>
                    <BsCartDashFill />
                </button>
            </div>
        </section>
    );
}

export default CarItem;

CarItem.propTypes = {
    data: propTypes.object
}.isRequired;