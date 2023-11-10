import './Head.css'
import Head_phone from './Head_phone'
import Head_text from './Head_text'

function Head() {
    return (
        <div className='Head'>
            <div>
                <Head_phone />
                <Head_text />
            </div>
        </div>
    )
}

export default Head;