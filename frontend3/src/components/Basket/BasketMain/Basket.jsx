import "./BasketMain.css"
import "./BasketMain2.css"
import Title from "../Title"
import Cart from "../Cart"
import BasketButtonBuy from "../BasketButtonBuy/BasketButtonBuy";

function Basket() {
	return (
		<section className="Basket-section-cart">
			<header className="Basket-section-cart__header">
				<div className="Basket-container">
					<Title />
				</div>
			</header>
			<div className="Basket-section-cart__body">
				<div className="Basket-container">
					<Cart />
				</div>
			</div>
			<BasketButtonBuy />
    </section>
	);
}

export default Basket;
