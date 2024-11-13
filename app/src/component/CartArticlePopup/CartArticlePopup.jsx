import React from 'react';
import s from './cartArticlePopup.module.css';
import { useLocalStorage } from "@uidotdev/usehooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faTrash, faCartPlus } from '@fortawesome/free-solid-svg-icons';

export default function CartArticlePopup({plateSelected}) {
    let [isAddedToCart, setAddedToCart] = useLocalStorage("plate_"+plateSelected.name, false);
	let [plate, setPlate] = useLocalStorage("cartPlateSelected", plateSelected);
    let [cart, setCart] = useLocalStorage("chazablitaCart", []);
    function deleteFromCart() {
        setAddedToCart(false);
        setCart(cart.filter(added => added.name != plateSelected.name));
    }
    function addToCart() {
        setAddedToCart(true);
        setCart(cart.concat(plateSelected));
    }

    return (
        plate ?
        <>
        <div className={s.cartArticleOverlay} onClick={() => setPlate(false)}></div>
        <article className={s.cartArticle}>
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
                <h5>${plate.priceTotal}</h5>
                <h5>${plate.priceTotal - plate.priceDiscount}</h5>
            </div>
            {isAddedToCart? 
            (<button onClick={() => deleteFromCart()}>
                <FontAwesomeIcon icon={faTrash}/>
                <span>Delete from Cart</span>
            </button>):
            (<button onClick={() => addToCart()}>
                <FontAwesomeIcon icon={faCartPlus}/>
                <span>Cancel Delete</span>
            </button>)}
        </article>
        </> : ""
    )
}