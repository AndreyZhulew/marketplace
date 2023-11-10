import ButtonDelete from '../ButtonDelete';
import Count from '../Count';
import formatPrice from './../utils/priceFormatter'
import './Product.css';

const Product = ({ product, deleteProduct, increase, changeValue, decrease }) => {
	const { img, title, priceTotal, count, id } = product;

	return (
		<section className='Basket-product'>
			<div className='Basket-product__img'>
				<img src={`${img}`} alt={title} />
			</div>
			<div className='Basket-product__title'>{title}</div>
			<div className='Basket-product__count'>
				<Count count={count} increase={increase} decrease={decrease} changeValue={changeValue} id={id} />
			</div>
			<div className='Basket-product__price'>
				{formatPrice(priceTotal)} руб.
			</div>
			<div className='Basket-product__controls'>
				<ButtonDelete deleteProduct={deleteProduct} id={id} />
			</div>
		</section>
	);
};

export default Product;
