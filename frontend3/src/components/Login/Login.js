import './Login.css'
import {useState} from 'react'
import {login} from '../../http/userAPI'
import email_icon from '../../img/email-icon.svg'
import password_icon from '../../img/password-icon.svg'
import {NavLink, useNavigate} from "react-router-dom";
import { ROUTES } from '../../utils/router';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const click = async () => {
        let data;
        data = await login(email, password);
        console.log(data)
        navigate('/')
    }


    return (
        <div className='Login'>
            <div className='login-block'>
                <div className='login-info'>
                    <h1>Войти в аккаунт</h1>
                    <form>
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
                                <input type='password' placeholder='******' name='password' value={password} onChange = {e => setPassword(e.target.value)}/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='footer-login-block'>
                    <button type='button' onClick={click}>Войти</button>
                </div>
                <div className='footer-login-block-info'>
                    <p>Если Вы забыли пароль <br />
                        <span><NavLink to={ROUTES.ResetPass} style={{textDecoration: 'none'}}>Забыл пароль</NavLink></span> <br /> <br />

                        У Вас нет аккаунта? <br />
                        <span><NavLink to={ROUTES.Registration} style={{textDecoration: 'none'}}>Зарегистрироваться</NavLink></span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;