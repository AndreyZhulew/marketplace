import {useEffect, useState} from "react";
import ProductService from "../../../http/product.service";
import {CatalogTile} from "../CatalogTile/CatalogTile";

export const CatalogView = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        ProductService.getAll().then(res => setProducts(res))
    }, [props])

    return (
        <div>
            <h5>Найдено: {products?.length || 0} товаров</h5>
            <div>
                {products?.length > 0 && products.map(product =>
                    <CatalogTile product={product}/>
                )}
            </div>
        </div>
    )
}