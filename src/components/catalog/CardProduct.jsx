import Image from 'next/image';

const CardProduct = () => {
	return (
		<div className="card-product">
			<div className="card-product__img-hold">
				<Image src="/img/catalog/1.webp" alt="" className="card-product__img" width={264} height={264} priority={false}/>
			</div>
			<div className="card-product__text-hold">
				<a href="#" className="card-product__title-link">Планшет Lenovo Tab M10 Plus 4/128 Grey</a>
				<span className="card-product__price">8 999 грн <small>12 999 грн</small></span>
				<a href="#" className="card-product__btn-add">
					<svg className="icon icon-cart"><use href="#icon-cart-add"></use></svg>
				</a>
			</div>
		</div>
	);
}

export default CardProduct;
