import React from 'react';
import Banner from '../Banners/Banner'
import Head from '../Head/Head'
import Best_offers_product from '../Best_offers_products/Best_offers_product';
import Recomendation_products from '../Recomendation_products/Recomendation_products';
import Mailing from '../Mailing/Mailing';
import Faq from '../faq/faq';

import './main-page.css'

const MainPage = () => {
    return (
        <div className={"main_page_container"}>
            <Head />
            <Banner />
            <Best_offers_product />
            <Recomendation_products />
            <Mailing />
            <Faq />
        </div>
    );
}

export default MainPage;
