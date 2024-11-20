import React from 'react';
import s from './finalTicket.module.css';
import { useLocalStorage } from "@uidotdev/usehooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';

export default function FinalTicket() {
    let [cart, setCart] = useLocalStorage("chazablitaCart", []);
    let [ticket, setTicket] = useLocalStorage("chazablitaFinalTicket", true);
    let [totalPrice, setTotalPrice] = useLocalStorage("chazablitaTotalPrice", 0);

    let buy = () => {
        setCart([]);
        setTicket(false);
    }

    return (
        <>
        <div className={s.ticketOverlay} onClick={() => setTicket(false)}></div>
        <article className={s.ticket}>
            <span className={s.close} onClick={() => setTicket(false)}>
                <FontAwesomeIcon icon={faXmark}/>
            </span>
            <h2>Ticket:</h2>
            <div className={s.rowExplanation}>
                <h6>name</h6>
                <h6>price</h6>
            </div>
            {cart.map((plate, plateKey)=>(
                <div key={plateKey} className={s.row}>
                    <h4>{plate.name}</h4>
                    <h4>${plate.priceTotal - plate.priceDiscount}</h4>
                </div>
            ))}
            <div className={s.row}>
                <h4>Total: </h4>
                <h4>${totalPrice}</h4>
            </div>
            <button onClick={() => buy()}>
                <FontAwesomeIcon icon={faMoneyCheckDollar}/>
                <span>Buy</span>
            </button>
        </article>
        </>
    )
}