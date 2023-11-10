import {useParams, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {CatalogView} from "./CatalogView/CatalogView";

export const Catalog = () => {
    const { category, subcategory, product, alias } = useParams()

    const [searchParams, setSearchParams] = useSearchParams()

    const searchText = searchParams.get('search')
    const shop = searchParams.get('shop')

    const setSearchText = (searchText) => setSearchParams({ search: searchText })
    const setShopName = (shopName) => setSearchParams({ shop: shopName })

    useEffect(() => {
        console.log('search', searchText)
        console.log('shop', shop)
    }, [searchParams])

    return (
        <div>
            <h4>/ {category} / {subcategory} / {product} / {alias}</h4>
            <CatalogView searchParams={searchParams} alias={alias}/>
        </div>
    )
}