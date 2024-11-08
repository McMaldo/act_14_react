import React, { useState } from 'react';
import s from './menuArticle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

export default function MenuArticle({plate}) {
    let [isAddedToCart, setAddedToCart] = useState(false);

    return (
        <article className={s.menuArticle+" "+plate.class.category}>
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
            (<button className={s.addedToCart}>
                <span>Added to Cart</span>
            </button>):
            (<button onClick={() => setAddedToCart(true)}>
                <FontAwesomeIcon icon={faCartPlus}/>
                <span>Add to Cart</span>
            </button>)}
        </article>
    )
}