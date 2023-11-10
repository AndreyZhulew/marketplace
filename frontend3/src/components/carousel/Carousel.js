import './Carousel.css'
import {useState, useEffect, Children, cloneElement, useRef} from 'react'
import Recomendation_slider_button_left from '../../img/Recomendation_slider_button_left.png'
import Recomendation_slider_button_right from '../../img/Recomendation_slider_button_right.png'



let PAGE_WIDTH = 1800
let INITIAL_PAGE_WIDTH = 1577

export const Carousel = ({children}) => {
    
    const bannerRef = useRef(null)

    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)
    const [width, setWidth] = useState(INITIAL_PAGE_WIDTH)

    const handleLeftArrowClick = () => {
        console.log('handleLeftArrowClick')

        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH

            console.log(newOffset)
            return Math.min(newOffset, 0)
        })
    }

    useEffect(() => {
        setWidth(bannerRef?.current?.offsetWidth)
        console.log(bannerRef?.current?.offsetWidth)
    }, [bannerRef?.current?.offsetWidth])

    const handleRightArrowClick = () => {
        console.log('handleRightArrowClick')

        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH

            const maxOffset = -(PAGE_WIDTH * (pages.length - 1))

            console.log(newOffset, maxOffset)
            return Math.max(newOffset, maxOffset)
        })
    }

    useEffect(() => {
        setPages(
            Children.map(children , (child) => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `100%`,
                        maxWidth: `100%`,
                    },
                })
            })
        )
    }, [])

    return (
        <>
            <div className='main-container'>
                <div className='window' ref={bannerRef}>
                    <div className='all-pages-container'
                    
                    style={{
                        transform: `translateX(${offset}px)`,
                    }}
                    >{pages}</div>
                </div>
            </div>
            <div className='slider_buttons'>
                <img src={Recomendation_slider_button_left} onClick = {handleLeftArrowClick} />
                <img src={Recomendation_slider_button_right} onClick = {handleRightArrowClick} />
            </div>
        </>
    )
}