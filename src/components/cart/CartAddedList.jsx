'use client';

import Image from 'next/image';
import { useState } from 'react';

const CartAddedList = () => {
	const [cartVisible, setCartVisible] = useState(false);

	return (
		<div className="cart-added-list">
			<button className="cart-added-list__btn btn btn-icon" onClick={() => setCartVisible(!cartVisible)}>
				<span className="cart-added-summ js-cart-added-summ">0</span>
				<svg className="icon icon-cart-bag"><use href="#icon-cart-bag"></use></svg>
			</button>
			<div className={`cart-added-list__item-list ${(cartVisible) ? 'show' : ''}`} id="js-cart-added-list">

				<span className="no-result no-result--inline">
					<Image src="/img/no-result/no-result-v2.png" alt="No results" className="no-result__img" width={96} height={62} />
					<span className="no-result__title">Корзина пуста!</span>
				</span>

			</div>
		</div>
	);
}

export default CartAddedList;
