import {NavLink} from 'react-router-dom';
import '../Banners/Banner.css'
import Banner_first from '../../img/Banner_First.png'
import Banner_Second from '../../img/Banner_Second.png'
import Banner_Third from '../../img/Banner_Third.png'
import {Carousel} from '../carousel/Carousel'


function Banner() {
    return (
        <Carousel>
            <NavLink><img src={Banner_first} className='item item1' alt='Banner_first'/></NavLink>
            <NavLink><img src={Banner_Second} className='item item2' alt='Banner_Second'/></NavLink>
            <NavLink><img src={Banner_Third} className='item item3' alt='Banner_Third'/></NavLink>
        </Carousel>
    )
}

export default Banner;