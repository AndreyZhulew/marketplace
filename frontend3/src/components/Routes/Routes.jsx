import React from "react";
import { Routes, Route } from 'react-router-dom'
import MainPage from "../MainPage/MainPage";
import Login from "../Login/Login";
import Registration from "../Login/Registration";
import NewPass from "../Login/NewPass";
import RecetPass from "../Login/RecetPass";
import ThanksForRegistration from "../Login/ThankfForRegistration";
import AR from "../AR/AR";
import ProductPage from "../page-product/product-page";
import {CreateProduct} from "../Seller/CreateProduct/CreateProduct";
import {Catalog} from "../Catalog/Catalog";
import Basket from "../Basket/BasketMain/Basket";
import {MenuPanel} from "../Admin/MenuPanel/MenuPanel";
import MobileCatalog from "../MobileCatalog/MobileCatalog";

const AppRoutes = () => (
    <Routes>
        <Route index element = {<MainPage />}/>
        <Route path='/login' element = {<Login />}/>
        <Route path='/registration' element = {<Registration />}/>
        <Route path='/newpass' element = {<NewPass />}/>
        <Route path='/recetpass' element = {<RecetPass />}/>
        <Route path='/thanksforregistration' element = {<ThanksForRegistration />}/>
        <Route path='/basket' element = {<Basket />}/>
        <Route path='/test_page' element={<ProductPage />}/>
        <Route path='/create/product' element={<CreateProduct />}/>
        <Route path='/catalog/:category/:subcategory/:product' element={<Catalog />}/>
        <Route path='/product/:productId' element={<ProductPage />}/>
        <Route path='/admin/menu_panel' element={<MenuPanel />}/>
        <Route path='/catalog' element={<MobileCatalog />}/>
    </Routes>
);

export default AppRoutes;