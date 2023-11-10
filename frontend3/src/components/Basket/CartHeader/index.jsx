import "./CartHeader.css"

const CartHeader = () => {
    return (
		<header className='Basket-cart-header'>
			<div className='Basket-cart-header__title'>наименование</div>
			<div className='Basket-cart-header__count'>количество</div>
			<div className='Basket-cart-header__cost'>стоимость</div>
		</header>
	);
}

export default CartHeader;