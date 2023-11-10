import {useEffect, useState} from "react";
import MenuService from "../../../http/menu.service";
import cn from "classnames";

import "./category.css"

export const ProductType = ({subcategory}) => {
    const [productTypes, setProductTypes] = useState([])
    const [data, setData] = useState({
        image: '',
        name: ''
    })

    const [isCreateVisible, setIsCreateVisible] = useState(false)

    useEffect(() => {
        update()
    }, [subcategory])

    const update = () => {
        MenuService.getAllProductType(subcategory?.id).then(res => setProductTypes(res))
    }

    const handler = (event) => {
        setData(prevState => { return {...prevState, [event.target.name]: event.target.value}})
    }

    const createSubcategory = (event) => {
        event.preventDefault();
        const _data = {
            name: data.name,
            image: data.image,
            subcategoryId: subcategory.id
        }

        MenuService.createProductType(_data).then(res => {
            // alert('Подкатегория создана')
            update()
        }).catch(err => alert('Подкатегория не создана'))
    }

    const removeProductType = (productType) => {
        MenuService.removeProductType(productType.id).then(res => {
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

            {productTypes?.length > 0 ?
                <>
                    {productTypes.map(productType =>
                        <div className={cn("category_tile")}>
                            <div>{productType.name}</div>
                            <button onClick={() => removeProductType(productType)}>X</button>
                        </div>
                    )}
                </>
                :
                <p>Подкатегорий этой категории ещё нет</p>
            }
        </div>
    )
}