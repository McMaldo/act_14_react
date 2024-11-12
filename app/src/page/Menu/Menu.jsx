import React from 'react';
import { useLocalStorage } from "@uidotdev/usehooks";
import s from './menu.module.css';
import plates from '../../assets/plates.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faPizzaSlice, faBurger, faBowlFood, faMartiniGlassCitrus, faIceCream, faCoffee, faBacon, faMagnifyingGlass, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import MenuArticle from '../../component/MenuArticle/MenuArticle';
import MenuArticlePopup from '../../component/MenuArticlePopup/MenuArticlePopup';

export default function Menu() {
	let [plateSelected, setPlateSelected] = useLocalStorage("plateSelected", false);
	const categories = [
		{name:"appetizer",icon:faUtensils},
		{name:"pizza",icon:faPizzaSlice},
		{name:"burger",icon:faBurger},
		{name:"salad",icon:faBowlFood},
		{name:"drink",icon:faMartiniGlassCitrus},
		{name:"dessert",icon:faIceCream},
		{name:"coffee",icon:faCoffee},
		{name:"breakfast",icon:faBacon},
	]
	const gotoArticleCategory = (category) => {
		if(document.querySelector(String(category))){
			document.querySelector(category).scrollIntoView({behavior: 'smooth'})
		}
	}
	return (
		<>
			{plateSelected ? <MenuArticlePopup plateSelected={plateSelected}/> : ""}
			<section className={s.heading}>
				<h1>Welcome to Chazablita</h1>
				<div className={s.offers}>
					<div className={s.offers_title}>
						<h3>Ofertas de Re Chupete</h3>
					</div>
					<div className={s.offers_content}></div>
					<div className={s.search}>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
						<input type="search" name="food" id="search" placeholder='What do you want to eat?'/>
					</div>
				</div>
				<h2>Categories</h2>
				<div className={s.categories}>
					{categories.map(({name,icon},catKey)=>(
						<span key={catKey} className={s.category}
						onClick={() => gotoArticleCategory("."+name)}>
							<FontAwesomeIcon icon={icon} />
							<span>{name}</span>
						</span>
					))}
				</div>
				<h2>Menu</h2>
			</section>
			<section className={s.menu}>
				{plates.result.map((plate, plateKey) => (
					<MenuArticle key={plateKey} plate={plate} />
				))}
			</section>
		</>
	)
}