import {CategoryBlock} from "./CategoryBlock";
import {useEffect, useState} from "react";
import {SubcategoryBlock} from "./SubcategoryBlock";

import './category.css'
import {ProductType} from "./ProductType";

export const MenuPanel = () => {
    const [currentCategory, setCurrentCategory] = useState({})
    const [currentSubcategory, setCurrentSubcategory] = useState({})

    useEffect(() => {
        console.log(currentCategory)
    }, [currentCategory])

    return (
        <div className={"menu_panel_container"}>
            <CategoryBlock currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>
            <SubcategoryBlock category={currentCategory} setCurrentSubcategory={setCurrentSubcategory} currentSubcategory={currentSubcategory}/>
            <ProductType subcategory={currentSubcategory}/>
        </div>
    )
}