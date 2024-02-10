import CartAddedList from '../cart/CartAddedList';
import SvgIcons from './SvgIcons';

const Footer = () => {
	return (
		<>			
			<div className="footer">
				<div className="container">
					<a href="#" className="logo">I-happy</a>

					<ul className="navbar-nav menu">
						<li className="nav-item menu__li">
							<a href="#" className="nav-link menu__link link-hover">Каталог</a>
						</li>
						<li className="nav-item menu__li">
							<a href="#" className="nav-link menu__link link-hover">Про нас</a>
						</li>
						<li className="nav-item menu__li">
							<a href="#" className="nav-link menu__link link-hover">Доставка і оплата</a>
						</li>
						<li className="nav-item menu__li">
							<a href="#" className="nav-link menu__link link-hover">Контакти</a>
						</li>
					</ul>

					<div className="footer__social">
						<div className="social">
							<a href="#" rel="nofollow" target="_blank" className="social__item facebook">
								<svg className="icon icon-facebook"><use href="#icon-facebook"></use></svg>
							</a>
							<a href="#" rel="nofollow" target="_blank" className="social__item instagram">
								<svg className="icon icon-instagram"><use href="#icon-instagram"></use></svg>
							</a>
							<a href="#" rel="nofollow" target="_blank" className="social__item youtube">
								<svg className="icon icon-youtube"><use href="#icon-youtube"></use></svg>
							</a>
						</div>
					</div>

					<p className="footer__copyright">
						<span>Всі права на статті, ілюстрації, інші матеріали належать site.com та охороняються законом України «Про авторське право і суміжні права».<br />При використанні матеріалів посилання на сайт обов'язкове!</span>
						<span className="footer__developer">Розробник сайту: <a href="#" target="_blank"></a></span>
					</p>
				</div>
			</div>
			
			<CartAddedList />
			<SvgIcons />
		</>
	);
}

export default Footer;
