import './Registration.css'
import {useState} from 'react'
import email_icon from '../../img/email-icon.svg'
import password_icon from '../../img/password-icon.svg'
import login_icon from '../../img/login-icon.svg'
import {registration} from '../../http/userAPI'
import {useNavigate} from "react-router-dom";


const Auth = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const click = async () => {
        let data;
        data = await registration(email, password);
        navigate('/thanksforregistration')
    }

    return (
        <div className='Login'>
            <div className='login-block'>
                <div className='login-info'>
                    <h1>Зарегистрироваться</h1>
                    <form>
                        {/* <div className='login_input'>
                            <label for = "email"><p>Введите логин:</p></label>
                            <div className='position-input'>
                                <img  src= {login_icon} alt='login_icon'/>
                                <input type='text' placeholder='student' name='login'/>
                            </div>
                        </div> */}

                        <div className='login_input'>
                            <label for = "email"><p>Введите почту:</p></label>
                            <div className='position-input'>
                                <img  src= {email_icon} alt='email_icon'/>
                                <input type='text' placeholder='weare@students.ru' name='email' value={email} onChange = {e => setEmail(e.target.value)}/>
                            </div>
                        </div>

                        <div className='login_input'>
                            <label for = "password"><p>Введите пароль:</p></label>
                            <div className='position-input'>
                                <img  src= {password_icon} alt='password_icon'/>
                                <input type='password' placeholder='*****' value={password} onChange = {e => setPassword(e.target.value)} />
                            </div>
                        </div>
                    </form>
                </div>
                <div className='footer-login-block'>
                    <button type='button' onClick={click}>Регистрация</button>
                </div>
                <div className='footer-checkbox'>
                    <input type='checkbox' className='custom-checkbox' />
                    <p>Соглашаюсь с правилами пользования <br />
                        торговой площадкой и возврата </p>
                </div>
            </div>
        </div>
    )
}

export default Auth;