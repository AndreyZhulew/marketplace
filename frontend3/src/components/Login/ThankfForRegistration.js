import './ThanksForRegistration.css'
import cifrik from '../../img/cifrik.png'
import {useNavigate} from "react-router-dom";

function ThanksForRegistration() {

    const navigate = useNavigate()

    const click = async () => {
        navigate('/login')
    }

    return (
        <div className='Login'>
            <div className='login-block'>
                <div className='tfr-login-info'>
                    <h1>Спасибо за регистрацию!</h1>
                    <img src= {cifrik} />
                </div>
                <div className='footer-login-block'>
                    <button type='button' onClick={click}>Войти</button>
                </div>
            </div>
        </div>
    )
}

export default ThanksForRegistration;