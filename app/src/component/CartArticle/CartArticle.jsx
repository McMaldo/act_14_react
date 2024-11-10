import React from 'react';
import { useLocalStorage } from "@uidotdev/usehooks";
import s from './cartArticle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function CartArticle({plate}) {
    let [cart, setCart] = useLocalStorage("chazablitaCart", []);
    let [isAddedToCart, setAddedToCart] = useLocalStorage("plate_"+plate.name,false);
    let [articleCount, setArticleCount] = useLocalStorage("articleCount_"+plate.name, 1)

    function deleteFromCart() {
        setArticleCount(1);
        setAddedToCart(false);
        setCart(cart.filter(added => added.name != plate.name));
    }
    function articleCountPlus() {
        if(articleCount < 8)
            setArticleCount(articleCount+1)
    }
    function articleCountMinus() {
        if(articleCount > 1)
            setArticleCount(articleCount-1)
    }

    return (
        <article className={s.cartArticle}>
            <div className={s.img_container}>
                <img src={plate.img} alt=""/>
            </div>
            <div className={s.article_info}>
                <span className={s.leftSide}>
                    <h4>{plate.name}</h4>
                    <h4 className={s.price}>${plate.price.total - plate.price.discount}</h4>
                </span>
                <span className={s.rightSide}>
                    <FontAwesomeIcon icon={faTrash} onClick={() => deleteFromCart()} className={s.trash}/>
                    <div className={s.article_unit}>
                        <FontAwesomeIcon icon={faMinus} onClick={() => articleCountMinus()}/>
                        <span id='total'>{articleCount}</span>
                        <FontAwesomeIcon icon={faPlus} onClick={() => articleCountPlus()}/>
                    </div>
                </span>
            </div>
        </article>
    )
}