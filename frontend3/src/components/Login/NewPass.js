import './Login.css'
import password_icon from '../../img/password-icon.svg'

function NewPass() {
    return (
        <div className='Login'>
            <div className='login-block'>
                <div className='login-info'>
                    <h1>Новый пароль</h1>
                    <form>
                        <div className='login_input'>
                            <label for = "password"><p>Введите пароль:</p></label>
                            <div className='position-input'>
                                <img  src= {password_icon} alt='password_icon'/>
                                <input type='password' placeholder='******' name='password'/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='footer-login-block'>
                    <button type='button'>Применить пароль</button>
                </div>
            </div>
        </div>
    )
}

export default NewPass;