import cn from 'classnames';
import './catalog-menu.css';
import MenuService from '../../http/menu.service';
import {useEffect, useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import closeCatalogMenu from '../../img/xmark-solid.svg'

export const CatalogMenu = ({isVisible, setIsVisible}) => {
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState({});
    const menuRef = useRef(null);
    const mainContainerRef = useRef(null);

    const update = () => {
        MenuService.getAllCategories().then((res) => setCategories(res));
    };

    useEffect(() => {
        update();
    }, []);

    useEffect(() => {
        setIsVisible(false);
    }, [window.location.href]);

    const handleMenuClick = (e) => {
        // Предотвратить закрытие меню при клике внутри меню
        console.log('stop')
        e.stopPropagation();
    };

    const handleDocumentClick = (e) => {
        console.log('click')
        // Закрыть меню при клике вне меню
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        // Добавить обработчик события клика на весь документ
        if (isVisible) {
            menuRef.current.addEventListener('click', handleDocumentClick);
        } else {
            menuRef.current.removeEventListener('click', handleDocumentClick);
        }
    }, [isVisible]);

    return (
        <div className={cn('catalog_bg_container', isVisible && 'visible')} ref={mainContainerRef}>
            <div className={cn('catalog_menu_main_container', isVisible && 'visible')} ref={menuRef}>
                <div className={'catalog_menu_main'}>
                    <button onClick={() => setIsVisible(false)}><img className = 'closeCatalogMenu' src={closeCatalogMenu}/></button>
                    <h1>Каталог</h1>
                    {categories?.length > 0 ? (
                        <>
                            {categories.map((category) => (
                                <div
                                    className={cn(
                                        'category_title',
                                        currentCategory.id === category.id && 'active'
                                    )}
                                    onMouseEnter={() => setCurrentCategory(category)}
                                >
                                    <div>{category.name}</div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <p>Категорий ещё нет</p>
                    )}
                </div>

                <div className='catalog_menu_children'>
                    {currentCategory &&
                        currentCategory?.subcategories &&
                        currentCategory?.subcategories.map((subcategory) => (
                            <div>
                                <div className={cn('category_title')} >
                                    <div>{subcategory.name}</div>
                                </div>
                                <div className={'category_block'}>      
                                    {subcategory?.productTypes &&
                                        subcategory.productTypes.map((prod) => (
                                            <Link
                                                to={'/catalog/' + prod.alias}
                                                className={'catalog_menu_sub'}
                                            >
                                                {prod.name}
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};
