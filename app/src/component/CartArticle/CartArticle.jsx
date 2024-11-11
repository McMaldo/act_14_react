import React, { useState } from 'react';
import { useLocalStorage } from "@uidotdev/usehooks";
import s from './cartArticle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function CartArticle({plateParam}) {
    let [plate, setPlate] = useState(plateParam);
    let [cart, setCart] = useLocalStorage("chazablitaCart", []);
    let [isAddedToCart, setAddedToCart] = useLocalStorage("plate_"+plate.name, false);
	let [plateSelected, setPlateSelected] = useLocalStorage("cartPlateSelected", false);

    let setPlateCount = (newValue) => { 
        setPlate(prevState => ({
            ...prevState,
            count: newValue
        }));
        /*let plateToChange = cart.find(plateSearch => plateSearch.name == plate.name)
        
        buscar como actualizar el contenido de Cart
        para guardar el count de plate 
        cada vez que se suma o resta
        */
    };
    function deleteFromCart() {
        setPlateCount(0)
        setAddedToCart(false);
        setCart(cart.filter(added => added.name != plate.name));
    }
    function articleCountPlus() {
        if(plate.count < 8)
            setPlateCount(plate.count+1)
    }
    function articleCountMinus() {
        if(plate.count > 1)
            setPlateCount(plate.count-1)
    }

    return (
        <article className={s.cartArticle}>
            <div className={s.img_container} onClick={() => setPlateSelected(plate)}>
                <img src={plate.img} alt=""/>
            </div>
            <div className={s.article_info}>
                <span className={s.leftSide}>
                    <h4 onClick={() => setPlateSelected(plate)}>{plate.name}</h4>
                    <h4 className={s.price}>${plate.price.total - plate.price.discount}</h4>
                </span>
                <span className={s.rightSide}>
                    <div className={s.article_unit}>
                        <FontAwesomeIcon icon={faMinus} onClick={() => articleCountMinus()}/>
                        <span id='total'>{plate.count}</span>
                        <FontAwesomeIcon icon={faPlus} onClick={() => articleCountPlus()}/>
                    </div>
                </span>
            </div>
        </article>
    )
}