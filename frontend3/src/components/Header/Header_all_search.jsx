import '../../styles/Header/Header_all_search.css'


function Header_all_search() {
    return (
        <main className='Header_all_search'>
            <i className="fa-solid fa-magnifying-glass"></i>
            <div><input  type='text' placeholder='Поиск...'/></div>
        </main>
    )
}

export default Header_all_search;