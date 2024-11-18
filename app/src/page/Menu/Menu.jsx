import React, { useEffect, useState } from 'react';
import { useLocalStorage } from "@uidotdev/usehooks";
import s from './menu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faPizzaSlice, faBurger, faBowlFood, faMartiniGlassCitrus, faIceCream, faCoffee, faBacon, faMagnifyingGlass, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import MenuArticle from '../../component/MenuArticle/MenuArticle';
import MenuArticlePopup from '../../component/MenuArticlePopup/MenuArticlePopup';
import ENDPOINT from '../../env.js';
import plates from '../../assets/plates.json';

export default function Menu() {
	let [plateSelected, setPlateSelected] = useLocalStorage("plateSelected", false);

	let [data, setData] = useState(null);
	let [error, setError] = useState(false);
	let [loading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(true);
		fetch(ENDPOINT.GET_PLATE_ALL)
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json();
		})
		.then(data => {
			setData(data);
			setLoading(false);
		})
		.catch(error => {
			console.error('Error fetching data:', error);
			setError(true);
			setLoading(false);
		});
	}, [ENDPOINT.GET_PLATE_ALL]);

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
				{error ? 
				plates.map((plate, plateKey) => (
					<MenuArticle key={plateKey} plate={plate} />
				)) :
				loading ? <img src="/act_14_react/img/loading2.svg" alt="" className='loading' /> :
				!data ? "no data" :
				data.map((plate, plateKey) => (
					<MenuArticle key={plateKey} plate={plate} />
				))}
			</section>
		</>
	)
}