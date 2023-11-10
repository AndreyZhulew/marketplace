import {useEffect, useState} from "react";
import MenuService from "../../../http/menu.service";
import cn from "classnames";

import "./category.css"

export const SubcategoryBlock = ({category, setCurrentSubcategory, currentSubcategory}) => {
    const [subcategories, setSubcategories] = useState([])
    const [data, setData] = useState({
        image: '',
        name: ''
    })

    const [isCreateVisible, setIsCreateVisible] = useState(false)

    useEffect(() => {
        update()
    }, [category])

    const update = () => {
        MenuService.getAllSubcategoriesByCategory(category?.id).then(res => setSubcategories(res))
    }

    const handler = (event) => {
        setData(prevState => { return {...prevState, [event.target.name]: event.target.value}})
    }

    const createSubcategory = (event) => {
        event.preventDefault();
        const _data = {
            name: data.name,
            image: data.image,
            categoryId: category.id
        }

        MenuService.createSubcategory(_data).then(res => {
            // alert('Подкатегория создана')
            update()
        }).catch(err => alert('Подкатегория не создана'))
    }

    const removeSubcategory = (subcategory) => {
        MenuService.removeSubcategory(subcategory.id).then(res => {
            //alert('Подкатегория удалена')
            update()
        })
    }

    return (
        <div className={"category_block"}>
            <header>
                <button onClick={() => setIsCreateVisible(prevState => !prevState)}>+ Создать подкатегорию</button>

                <div className={cn("category_create_container", isCreateVisible && "visible")}>
                    <form onSubmit={createSubcategory}>
                        <input type={"text"} placeholder={"Название категории"} name={"name"} value={data.name} onChange={handler}/>
                        <input type={"submit"} value={"Создать подкатегорию"}/>
                    </form>
                </div>
            </header>

            {subcategories?.length > 0 ?
                <>
                    {subcategories.map(subcategory =>
                        <div className={cn("category_tile", currentSubcategory.id===subcategory.id && "active")} onClick={() => setCurrentSubcategory(subcategory)}>
                            <div>{subcategory.name}</div>
                            <button onClick={() => removeSubcategory(subcategory)}>X</button>
                        </div>
                    )}
                </>
                :
                <p>Подкатегорий этой категории ещё нет</p>
            }
        </div>
    )
}