import React, { useEffect } from 'react';
import { useLocalStorage } from "@uidotdev/usehooks";
import s from './cart.module.css';
import CartArticle from '../../component/CartArticle/CartArticle';
import CartArticlePopup from '../../component/CartArticlePopup/CartArticlePopup';
import FinalTicket from '../../component/FinalTicket/FinalTicket';

export default function Cart() {
    let [cart, setCart] = useLocalStorage("chazablitaCart", []);
	let [plateSelected, setPlateSelected] = useLocalStorage("cartPlateSelected", false);
    let [totalPrice, setTotalPrice] = useLocalStorage("chazablitaTotalPrice", 0);
    let [ticket, setTicket] = useLocalStorage("chazablitaFinalTicket", false);

    useEffect(() => {
        window.scrollTo({top: 0});
        
        let totalAux = 0;
        cart.forEach((plate) => {
            let articlePrice = (plate.price.total - plate.price.discount) * Number(plate.count || 1);
            totalAux = totalAux + articlePrice;
        })
        setTotalPrice(totalAux);
    }, [cart]);

    return (
        <>
        {plateSelected ? <CartArticlePopup plateSelected={plateSelected}/> : ""}
        {ticket ? <FinalTicket/> : ""}
        <section className={s.heading}>
            <h2>Your Cart</h2>
        </section>
        <section className={s.cart+" "+(cart.length == 0 ? s.cartEmpty : "")}>
        {cart.map((plate, plateKey) => (
            <CartArticle key={plateKey} plateParam={plate}/>
        ))}
        </section>
        <section className={s.buy}>
            <div className={s.total}>
                <span>Total Price:</span>
                <span>${totalPrice}</span>
            </div>
            <button onClick={() => setTicket(true)}>Buy</button>
        </section>
        </>
    )
}