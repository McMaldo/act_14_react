import React from 'react';
import s from './cart.module.css';
import plates from '../../assets/plates.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function Cart() {
    return (
        <>
        <section className={s.heading}>
            <h2>Your Cart</h2>
        </section>
        <section className={s.cart}>
        {plates.result.map((plate, plateKey) => plateKey<8 ? (
            <article key={plateKey}>
                <div className={s.img_container}>
                    <img src={plate.img} alt=""/>
                </div>
                <div className={s.article_info}>
                    <h4>{plate.name}</h4>
                    <div className={s.article_price}>
                        <h4 className={s.price}>${plate.price.total - plate.price.discount}</h4>
                        <div className={s.article_unit}>
                            <FontAwesomeIcon icon={faPlus}/>
                            <span id='total'>0</span>
                            <FontAwesomeIcon icon={faMinus}/>
                        </div>
                    </div>
                </div>
            </article>
        ) : "" )}
        </section>
        <section className={s.buy}>
            
        </section>
        </>
    )
}