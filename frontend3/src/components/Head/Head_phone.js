import './Head_phone.css'
import {ReactComponent as Iphone} from '../../img/Iphone.svg'

function Head_phone() {
    return (
        <div className='Head_phone'>
            <div className='Head_phone_first'>
                <Iphone className='anim-pulse' />
            </div>
        </div>
    )
}

export default Head_phone;