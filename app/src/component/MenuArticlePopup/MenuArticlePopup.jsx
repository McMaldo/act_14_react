import React, { useState } from 'react';
import s from './menuArticlePopup.module.css';
import { useLocalStorage } from "@uidotdev/usehooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCartPlus } from '@fortawesome/free-solid-svg-icons';

export default function MenuArticlePopup({plateSelected}) {
    let [isAddedToCart, setAddedToCart] = useLocalStorage("plate_"+plateSelected.name,false);
	let [plate, setPlate] = useLocalStorage("plateSelected", plateSelected);
    let [cart, setCart] = useLocalStorage("chazablitaCart", []);
    function addToCart() {
        setAddedToCart(true);
        setCart(cart.concat(plateSelected));
    }
    function deleteFromCart() {
        setAddedToCart(false);
    }

    return (
        plate ?
        <>
        <div className={s.menuArticleOverlay} onClick={() => setPlate(false)}></div>
        <article className={s.menuArticle}>
            <span className={s.close} onClick={() => setPlate(false)}>
                <FontAwesomeIcon icon={faXmark}/>
            </span>
            <div className={s.img_container}>
                <img src={plate.img} alt="" />
            </div>
            <div className={s.name}>
                <h4>{plate.name}</h4>
            </div>
            <div className={s.price}>
                <h5>${plate.price.total}</h5>
                <h5>${plate.price.total - plate.price.discount}</h5>
            </div>
            {isAddedToCart? 
            (<button onClick={() => deleteFromCart()} className={s.addedToCart}>
                <span>Added to Cart</span>
            </button>):
            (<button onClick={() => addToCart()}>
                <FontAwesomeIcon icon={faCartPlus}/>
                <span>Add to Cart</span>
            </button>)}
        </article>
        </> : ""
    )
}