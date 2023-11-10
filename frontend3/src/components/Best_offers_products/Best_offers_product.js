import './Best_offers_product.css'
import bracelet_10 from '../../img/bracelet_10.png'
import sneakers_cifric from '../../img/sneakers_cifric.png'
import sneakers_axel from '../../img/sneakers_axel.png'
import students_cap from '../../img/students_cap.png'

const goods = [
    {
        id: 4,
        img: students_cap,
        type: 'Бейсболка',
        title: 'Студенческая',
        description: 'efoefefe',
        price: 999,
    },
    {
        id: 5,
        img: sneakers_cifric,
        type: 'Кеды',
        title: 'Цифрик',
        description: 'efoefefe',
        price: 2999,
    },
    {
        id: 7,
        img: sneakers_axel,
        type: 'Кеды',
        title: 'Аксель',
        description: 'efoefefe',
        price: 3999,
    },
    {
        id: 2,
        img: bracelet_10,
        type: 'Акссесуары',
        title: 'Браслетик',
        description: 'efoefefe',
        price: 199,
    }
    
]

function Best_offers_product() {
    return (
        <div className='Best_offers_product'>
            <h1>Лучшие предложения!</h1>
            <div className='product'>
                { goods.map(good => 
                    <div className='product-cart'>
                        <img src={good.img} alt='students_cap'/>
                        <p className='product-title'>{good.type}<br/>
                        <span>{good.title}</span></p>
                        <p className='price'>{good.price}&#8381;</p>
                    </div>  
                    )}
            </div>
        </div>
    )
}

export default Best_offers_product;