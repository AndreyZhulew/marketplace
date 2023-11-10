import '../../styles/Footer/Footer.css'
import Footer_navigation from '../../components/Footer/Footer_navigation'
import Footer_links from '../../components/Footer/Footer_links'
import Footer_logo from '../../components/Footer/Footer_logo'


function Footer() {
    return (
        <div className='Footer'>
            <div className='footer-main'>
                <Footer_navigation />
                <Footer_links />
            </div>
            <Footer_logo />
        </div>
    )
}

export default Footer;