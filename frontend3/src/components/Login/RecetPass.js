import './Login.css'
import email_icon from '../../img/email-icon.svg'
import login_icon from '../../img/login-icon.svg'

function ResetPass() {
    return (
        <div className='Login'>
            <div className='login-block'>
                <div className='login-info'>
                    <h1>Забыли пароль?</h1>
                    <form>
                        <div className='login_input'>
                            <label for = "email"><p>Введите логин:</p></label>
                            <div className='position-input'>
                                <img  src= {login_icon} alt='login_icon' />
                                <input type='text' placeholder='student' name='email'/>
                            </div>
                        </div>

                        <div className='login_input'>
                            <label for = "email"><p>Введите почту:</p></label>
                            <div className='position-input'>
                                <img  src= {email_icon}  alt='email_icon'/>
                                <input type='text' placeholder='weare@students.ru' name='email'/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='footer-login-block'>
                    <button type='button'>Сбросить пароль</button>
                </div>
            </div>
        </div>
    )
}

export default ResetPass;