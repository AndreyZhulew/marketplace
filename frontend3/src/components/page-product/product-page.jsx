import React, { useEffect, useState } from 'react';
import dildo from '../../img/dildo.png';
import './product-page.css';
import { useParams } from 'react-router-dom';
import ProductService from '../../http/product.service';
import { BASE_BACKEND_URL } from '../../utils/router';
import emptyPhoto from '../../img/emptyPhoto.svg'

const ProductPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        ProductService.getOne(productId).then((res) => setProduct(res));
    }, [productId]);

    const getFirstImage = (images, index = 0) => {
        if (images && images.length > 0) {
            return BASE_BACKEND_URL + images[index].imageUrl;
        } else {
            return emptyPhoto;
        }
    };

    return (
        <div className='ProductPage'>
            <h1>{product?.name}</h1>
            <div className='product-page-main'>
                <div className='product-page-photo'>
                    <div className='product-page-photo-column'>
                        {product?.images &&
                            product.images.map((img, index) => (
                                <div key={index}>
                                    <img src={BASE_BACKEND_URL + img.imageUrl} onError={() => (img.src = emptyPhoto)} alt='Product' />
                                </div>
                            ))}
                    </div>

                    <div className='product-page-photo-slider'>
                        <img src={getFirstImage(product.images)} alt='Product' />
                    </div>

                    <div className='product-page-info'>
                        <h1>Цвет: </h1>
                        <div className='product-page-info-color'>
                            <div>
                                <div>
                                    <img src={dildo} alt='Dildo' />
                                </div>
                                <div>
                                    <img src={dildo} alt='Dildo' />
                                </div>
                                <div>
                                    <img src={dildo} alt='Dildo' />
                                </div>
                                <div>
                                    <img src={dildo} alt='Dildo' />
                                </div>
                                <div>
                                    <img src={dildo} alt='Dildo' />
                                </div>
                            </div>
                        </div>

                        <div className='product-page-info-size'>
                            <h1>Таблица размеров</h1>
                            <div>
                                <button>
                                    <p>XS</p>
                                </button>
                                <button>
                                    <p>S</p>
                                </button>
                                <button>
                                    <p>M</p>
                                </button>
                                <button>
                                    <p>L</p>
                                </button>
                                <button>
                                    <p>XL</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='product-page-buy'>
                    <h4>
                        {product?.price}
                        <span>2599₽</span>
                    </h4>
                    <div className='product-page-buttons'>
                        <button className='button-buy'>Добавить в корзину</button>
                        <button className='button-fitting'>Примерка</button>
                    </div>
                    <p>Доставим в течение 3-х дней</p>
                </div>
            </div>
            <div>{product?.description}</div>
        </div>
    );
};

export default ProductPage;
