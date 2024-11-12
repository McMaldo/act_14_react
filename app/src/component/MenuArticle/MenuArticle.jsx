import React from 'react';
import { useLocalStorage } from "@uidotdev/usehooks";
import s from './menuArticle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

export default function MenuArticle({plate}) {
	let [plateSelected, setPlateSelected] = useLocalStorage("plateSelected", false);
    let [isAddedToCart, setAddedToCart] = useLocalStorage("plate_"+plate.name,false);
    let [cart, setCart] = useLocalStorage("chazablitaCart", []);
    function addToCart() {
        setAddedToCart(true);
        plate = {
            ...plate,
            count: 1
        }
        setCart(cart.concat(plate));
    }
    function deleteFromCart() {
        setAddedToCart(false);
        setCart(cart.filter(added => added.name != plate.name));
    }

    return (
        <article className={s.menuArticle+" "+plate.class.category}>
            <div className={s.img_container} onClick={() => setPlateSelected(plate)}>
                <img src={plate.img} alt="" />
            </div>
            <div className={s.name} onClick={() => setPlateSelected(plate)}>
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
    )
}