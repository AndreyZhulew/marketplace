import '../../styles/Footer/Footer_links.css'
import {ReactComponent as VK} from '../../img/VK.svg'
import {ReactComponent as INSTAGRAM} from '../../img/INST.svg'
import {ReactComponent as TELEGRAM} from '../../img/TELEGRAM.svg'

function Footer_links() {
    return (
        <div className='Footer_links'>
            <ul>
                <li><a><VK /></a></li>
                <li><a><INSTAGRAM /></a></li>
                <li><a><TELEGRAM /></a></li>
            </ul>
        </div>
    )
}

export default Footer_links;