import cross from'../../../img/cross.svg'


const ButtonDelete = ({ deleteProduct, id }) => {
	return (
		<button type='button' onClick={()=>{deleteProduct(id);}}>
			<img src={cross} alt='Delete' />
		</button>
	);
};

export default ButtonDelete;