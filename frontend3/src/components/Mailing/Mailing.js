import './Mailing.css'

function Mailing() {
    return (
        <div className='Mailing'>
            <div className='mailing-form'>
                <h3>Выгода с доставкой</h3>
                <p className='mailing_first_info'>Подпишитесь и получайте промокоды, акции и подборки товаров на свою почту</p>
                <form>
                    <input placeholder='Введите e-mail'/>
                    <button type='button'>Подписаться</button>
                </form>
                <p className='mailing_second_info'>Нажимая «Подписаться» вы соглашаетесь с <span><a>Условиями использования сайта</a></span> <br/> и <span><a>Политикой обработки персональных данных</a></span></p>
            </div>
        </div>
    )
}

export default Mailing;