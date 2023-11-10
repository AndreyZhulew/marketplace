import {useEffect, useState} from "react";
import ProductService from "../../../http/product.service";

import './create-product.css'
import MenuService from "../../../http/menu.service";
import SelectOption from "../../uikit/SelectOption/SelectOption";
import ImageUploader from "../../uikit/ImageUploader/ImageUploader";

export const CreateProduct = () => {
    const [types, setTypes] = useState([])
    const [message, setMessage] = useState('')
    const [ imageArray, setImageArray] = useState([])
    const [data, setData] = useState({
        name: '',
        description: '',
        price: 0.0,
        category: ''
    })

    const setSelectedCategory = (value) => setData(prevState => { return {...prevState, category: value}})

    useEffect(() => {
        MenuService.getAllProductTypeAll().then(res => {
            if (Array.isArray(res) && res.length > 0) {
                let _categories = []
                res.map(category => _categories.push({ ...category, value: category.name}))
                setTypes(_categories)
            }
        })
    }, [])

    const handler = (event) => {
        setData(prevState => { return {...prevState, [event.target.name]: event.target.value}})
    }

    const create = (event) => {
        event.preventDefault();

        const formData = new FormData()
        formData.append("images", imageArray[0])
        formData.append("name", data.name)
        formData.append("price", data.price)
        formData.append("description", data.description)
        formData.append("category", data.category)

        ProductService.create(formData)
            .then(r => {
                setMessage('Товар создан')
            })
            .catch(err => {
                setMessage(err?.message)
            })
    }

    return (
        <>
            <form onSubmit={create} className={'form-container'}>
                <div className="form-container-main">
                    <h5>Название</h5>
                    <input name={'name'} value={data.name} onChange={handler}/>
                    <h5>Описание</h5>
                    <input name={'description'} value={data.description} onChange={handler}/>
                    <h5>Стоимость</h5>
                    <input name={'price'} value={data.price} onChange={handler}/>
                    {/*<h5>Категория</h5>*/}
                    {/*<input name={'category'} value={data.category} onChange={handler}/>*/}
                    <h5>Категория</h5>
                    <SelectOption setSelectedOption={setSelectedCategory} selectedOption={data.category} data={types}/>
                    <h5>Фотографии</h5>
                    <ImageUploader setParentImages={setImageArray}/>
                    <input type={'submit'} value={'Создать'} className="form-container-main-submit"/>
                    <p className={'error-label'}>{message}</p>
                </div>
            </form>
        </>
    )
}