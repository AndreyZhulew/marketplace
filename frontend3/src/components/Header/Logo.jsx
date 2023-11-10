import { Link } from 'react-router-dom';
import '../../styles/Header/Logo.css'
import { ROUTES } from '../../utils/router';


function Logo() {
    return (
        <div className='Logo'>
            <Link to={ROUTES.MainPage} style={{textDecoration: 'none'}}><h1><span>МЫ</span> СТУДЕНТЫ</h1></Link>
        </div>
    )
}

export default Logo;