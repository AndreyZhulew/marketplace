import '../../styles/Footer/Footer_navigation.css'
import {NavLink} from "react-router-dom";

function Footer() {
    return (
        <div className='Footer_navigation'>
            <ul>
                <li><NavLink to={'/login'} style={{textDecoration: 'none'}}>Профиль</NavLink></li>
                <li><NavLink to={'/basket'} style={{textDecoration: 'none'}}>Корзина</NavLink></li>
                <li><a>Оплата и доставка</a></li>
                <li><a>Обратная связь</a></li>
            </ul>
        </div>
    )
}

export default Footer;