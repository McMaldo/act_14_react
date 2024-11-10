import React from 'react';
import { useLocalStorage } from "@uidotdev/usehooks";
import s from './cart.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import CartArticle from '../../component/CartArticle/CartArticle';

export default function Cart() {
    let [cart, setCart] = useLocalStorage("chazablitaCart", []);

    return (
        <>
        <section className={s.heading}>
            <h2>Your Cart</h2>
        </section>
        <section className={s.cart+" "+(cart.length == 0 ? s.cartEmpty : "")}>
        {cart.map((plate, plateKey) => (
            <CartArticle key={plateKey} plate={plate}/>
        ))}
        </section>
        <section className={s.buy}>
            
        </section>
        </>
    )
}