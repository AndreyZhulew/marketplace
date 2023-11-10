import '../../styles/Header/Header.css'
import Logo from '../../components/Header/Logo'
import Header_all_search from '../../components/Header/Header_all_search'
import Header_navbar from '../../components/Header/Header_navbar'
import HeaderMobile from '../../components/Header/HeaderMobile'

function Header() {
    return (
        <div className='Header'>
            <div className='HeaderDiv'>
                <Logo className='header-desktop'/>
                <Header_all_search className='header-desktop'/>
                <Header_navbar className='header-desktop'/>
            </div>
            <div className='header-mobile'>
                <HeaderMobile />
            </div>
        </div>
    )
}

export default Header;