import React, { useEffect } from 'react';
import { useLocalStorage } from "@uidotdev/usehooks";
import s from './cart.module.css';
import CartArticle from '../../component/CartArticle/CartArticle';
import CartArticlePopup from '../../component/CartArticlePopup/CartArticlePopup';

export default function Cart() {
    let [cart, setCart] = useLocalStorage("chazablitaCart", []);
	let [plateSelected, setPlateSelected] = useLocalStorage("cartPlateSelected", false);
    useEffect(() => {
        window.scrollTo({top: 0});
    });
    let totalPrice = 0;

    return (
        <>
        {plateSelected ? <CartArticlePopup plateSelected={plateSelected}/> : ""}
        <section className={s.heading}>
            <h2>Your Cart</h2>
        </section>
        <section className={s.cart+" "+(cart.length == 0 ? s.cartEmpty : "")}>
        {cart.map((plate, plateKey) => {
            totalPrice += plate.price.total - plate.price.discount;
            return(<CartArticle key={plateKey} plate={plate}/>)
        })}
        </section>
        <section className={s.buy}>
            <div className={s.total}>
                <span>Total Price:</span>
                <span>${totalPrice}</span>
            </div>
            <button>Buy</button>
        </section>
        </>
    )
}