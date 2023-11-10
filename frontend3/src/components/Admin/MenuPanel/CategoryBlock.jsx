import {useEffect, useState} from "react";
import MenuService from "../../../http/menu.service";
import cn from "classnames";

import "./category.css"

export const CategoryBlock = ({setCurrentCategory, currentCategory}) => {
    const [categories, setCategories] = useState([])

    const [data, setData] = useState({
        image: '',
        name: ''
    })

    const [isCreateVisible, setIsCreateVisible] = useState(false)

    useEffect(() => {
        update()
    }, [])

    const update = () => {
        MenuService.getAllCategories().then(res => setCategories(res))
    }

    const handler = (event) => {
        setData(prevState => { return {...prevState, [event.target.name]: event.target.value}})
    }

    const createCategory = (event) => {
        event.preventDefault();
        const _data = {
            name: data.name,
            image: data.image
        }

        MenuService.createCategory(_data).then(res => {
            // alert('Категория создана')
            update()
        }).catch(err => alert('Категория не создана'))
    }

    const removeCategory = (category) => {
        MenuService.removeCategory(category.id).then(res => {
            //alert('Подкатегория удалена')
            update()
        })
    }

    return (
        <div className={"category_block"}>
            <header>
                <button onClick={() => setIsCreateVisible(prevState => !prevState)}>+ Создать категорию</button>

                <div className={cn("category_create_container", isCreateVisible && "visible")}>
                    <form onSubmit={createCategory}>
                        <input type={"text"} placeholder={"Название категории"} name={"name"} value={data.name} onChange={handler}/>
                        <input type={"submit"} value={"Создать категорию"}/>
                    </form>
                </div>
            </header>

            {categories?.length > 0 ?
                <>
                    {categories.map(category =>
                        <div className={cn("category_tile", currentCategory.id === category.id && "active")} onClick={() => setCurrentCategory(category)}>
                            <div>{category.name}</div>
                            <button onClick={() => removeCategory(category)}>X</button>
                        </div>
                    )}
                </>
            :
                <p>Категорий ещё нет</p>
            }
        </div>
    )
}