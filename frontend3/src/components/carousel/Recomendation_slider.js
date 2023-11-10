import '../../style/Recomendation_slider.css'
import Recomendation_slider_button_left from '../../img/Recomendation_slider_button_left.png'
import Recomendation_slider_button_right from '../../img/Recomendation_slider_button_right.png'

function Recomendation_slider() {
    return (
        <div className='Recomendation_slider'>
            <div className='slider_buttons'>
                <img src={Recomendation_slider_button_left} alt="arrow-left"/>
                <img src={Recomendation_slider_button_right} alt="arrow-right"/>
            </div>
        </div>
    )
}

export default Recomendation_slider;