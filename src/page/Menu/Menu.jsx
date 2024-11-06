import React from 'react';
import s from './menu.module.css';
import plates from '../../assets/plates.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faPizzaSlice, faBurger, faBowlFood, faMartiniGlassCitrus, faIceCream, faCoffee, faBacon, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Menu() {
	return (
		<>
			<section className={s.heading}>
				<h1>Welcome to Chazablita</h1>
				<div className={s.offers}>
					<div className={s.offers_title}>
						<h3>Las Mejores Ofertas</h3>
					</div>
					<div className={s.offers_content}>
						<img src="/src/assets/PizzaPortada.webp" alt="" />
					</div>
					<div className={s.search}>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
						<input type="search" name="food" id="search" placeholder='What do you want to eat?'/>
					</div>
				</div>
				<h2>Categories</h2>
				<div className={s.categories}>
					<span className={s.category}>
						<FontAwesomeIcon icon={faUtensils} />
						<span>Appetizer</span>
					</span>
					<span className={s.category}>
						<FontAwesomeIcon icon={faPizzaSlice} />
						<span>Pizza</span>
					</span>
					<span className={s.category}>
						<FontAwesomeIcon icon={faBurger} />
						<span>Burger</span>
					</span>
					<span className={s.category}>
						<FontAwesomeIcon icon={faBowlFood} />
						<span>Salad</span>
					</span>
					<span className={s.category}>
						<FontAwesomeIcon icon={faMartiniGlassCitrus} />
						<span>Drink</span>
					</span>
					<span className={s.category}>
						<FontAwesomeIcon icon={faIceCream} />
						<span>Dessert</span>
					</span>
					<span className={s.category}>
						<FontAwesomeIcon icon={faCoffee} />
						<span>Coffee</span>
					</span>
					<span className={s.category}>
						<FontAwesomeIcon icon={faBacon} />
						<span>Breakfast</span>
					</span>
				</div>
				<h2>Menu</h2>
			</section>
			<section className={s.menu}>
				{plates.result.map((plate, plateKey) => (
					<article key={plateKey}>
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
					</article>
				))}
			</section>
		</>
	)
}