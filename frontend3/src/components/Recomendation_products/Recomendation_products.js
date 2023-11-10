import './Recomendation_products.css';
import Bag_cifric from '../../img/Bag_cifric.png';
import Tshort_cifric from '../../img/t-short_cifric.png';
import Shopper_sofenish from '../../img/Shopper_sofenish.png';
import Hat_WeAreStudents from '../../img/Hat_WeAreStudents.png';
import Pin_cifric from '../../img/Pin_cifric.png';
import Candle_deadline from '../../img/Candle_deadline.png';
import Pin_axel from '../../img/Pin_axel.png';
import Energetic_hakaton from '../../img/Energetic_hakaton.png';
import book_success from '../../img/book_success.png';
import Cup_sofenish from '../../img/Cup_student.png';
import case_cifric from '../../img/case_cifric.png';
import column_axel from '../../img/column_axel.png';

const goods = [
    {
        id: 9,
        img: Bag_cifric,
        type: 'Рюкзак',
        title: 'Цифрик',
        description: 'efoefefe',
        price: 1999,
    },
    {
        id: 10,
        img: Tshort_cifric,
        type: 'Футблока',
        title: 'Цифрик',
        description: 'efoefefe',
        price: 1999,
    },
    {
        id: 11,
        img: Shopper_sofenish,
        type: 'Шоппер',
        title: 'Совёныш',
        description: 'efoefefe',
        price: 399,
    },
    {
        id: 12,
        img: Hat_WeAreStudents,
        type: 'Шапка',
        title: 'Студенческая',
        description: 'efoefefe',
        price: 999,
    },
    {
        id: 13,
        img: Pin_cifric,
        type: 'Аксессуар',
        title: 'Цифрик',
        description: 'efoefefe',
        price: 99,
    },
    {
        id: 15,
        img: Candle_deadline,
        type: 'Свеча',
        title: 'Успокоительная',
        description: 'efoefefe',
        price: 399,
    },
    {
        id: 16,
        img: Pin_axel,
        type: 'Аксессуар',
        title: 'Аксель',
        description: 'efoefefe',
        price: 99,
    },
    {
        id: 17,
        img: Energetic_hakaton,
        type: 'Напиток',
        title: 'Хакатон',
        description: 'efoefefe',
        price: 199,
    },
    {
        id: 18,
        img: book_success,
        type: 'Книга',
        title: 'История успеха',
        description: 'efoefefe',
        price: 999,
    },
    {
        id: 19,
        img: Cup_sofenish,
        type: 'Кружка',
        title: 'Совёныш',
        description: 'efoefefe',
        price: 299,
    },
    {
        id: 20,
        img: case_cifric,
        type: 'Чехол',
        title: 'Цифрик',
        description: 'efoefefe',
        price: 399,
    },
    {
        id: 21,
        img: column_axel,
        type: 'Умная колонка',
        title: 'Аксель',
        description: 'efoefefe',
        price: 2999,
    },
    
]

function Recomendation_products() {
    return (
        <div className='Recomendation_products'>
            <h1>Подобрано для Вас</h1>
            <div className='rec-product'> 
                { goods.map(good => 
                    <div className='rec-product-cart'>
                        <img src={good.img} alt='students_cap'/>
                        <p className='rec-product-title'>{good.type}<br/>
                        <span>{good.title}</span></p>
                        <p className='rec-price'>{good.price}&#8381;</p>
                    </div>  
                    )}
            </div>
        </div>
    )
}

export default Recomendation_products;