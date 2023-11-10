import "./Count.css"
import iconUp from'../../../img/icon-up.svg'
import iconDown from'../../../img/icon-down.svg'

const Count = ({ count, increase, decrease, changeValue, id }) => {
	return (
		<div className='Basket-count'>
			<div className='Basket-count__box'>
				<input onChange={(e)=>{changeValue(id, +e.target.value)}} type='number' className='Basket-count__input' min='1' max='100' value={count} />
			</div>
			<div className='Basket-count__controls'>
				<button type='button' className='Basket-count__up' onClick={()=>{increase(id)}}>
					<img src={iconUp} alt='Increase' />
				</button>
				<button type='button' className='Basket-count__down' onClick={()=>{decrease(id)}}>
					<img src={iconDown} alt='Decrease' />
				</button>
			</div>
		</div>
	);
};

export default Count;