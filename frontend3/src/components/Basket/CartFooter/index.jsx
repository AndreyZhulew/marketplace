import formatPrice from './../utils/priceFormatter';
import './CartFooter.css';

const CartFooter = ({ total }) => {
	const { count, price } = total;

	return (
		<footer className='Basket-cart-footer'>
			<div className='Basket-cart-footer__count'>{count} ед.</div>
			<div className='Basket-cart-footer__price'>
				{formatPrice(price)} руб.
			</div>
		</footer>
	);
};

export default CartFooter;