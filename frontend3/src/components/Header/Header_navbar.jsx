import '../../styles/Header/Header_navbar.css'
import bars_solid from '../../img/bars-solid.svg'
import cart_shopping from '../../img/cart-shopping-solid.svg'
import user_solid from '../../img/user-solid.svg'
import xmark from '../../img/xmark-solid.svg'
import rightArrow from '../../img/rightArrow.png'
import backButton from '../../img/backButton.png'
import {NavLink} from "react-router-dom";
import { ROUTES } from '../../utils/router';
import { useState } from 'react';
import React, { Component } from 'react';
import cn from 'classnames'
import {CatalogMenu} from "../CatalogMenu/CatalogMenu";

const menu = [
    {
        name: 'Женщинам',
        children: [
            {
                name:'Верхняя одежда',
                path:'/catalog/clothes/woman/outerwear'
            },
            {
                name:'Блузки и рубашки',
                path:'/catalog/clothes/woman/Blouses-and-shirts'
            },
            {
                name:'Брюки',
                path:'/catalog/clothes/woman/Trousers'
            },
            {
                name:'Джемперы, водолазки и кардиганы',
                path:'/catalog/clothes/woman/Jumpers-turtlenecks-and-cardigans'
            },
            {
                name:'Джинсы',
                path:'/catalog/clothes/woman/Jeans'
            },
            {
                name:'Комбинезоны',
                path:'/catalog/clothes/woman/Overalls'
            },
            {
                name:'Костюмы',
                path:'/catalog/clothes/woman/Costumes'
            },
            {
                name:'Лонгсливы',
                path:'/catalog/clothes/woman/Longsleeves'
            },
            {
                name:'Пиджаки, жилеты и жакеты',
                path:'/catalog/clothes/woman/Jackets-vests-and-jackets'
            },
            {
                name:'Платья и сарафаны',
                path:'/catalog/clothes/woman/Dresses-and-sundresses'
            },
            {
                name:'Толстовки, свитшоты и худи',
                path:'/catalog/clothes/woman/Hoodies-sweatshirts-and-hoodies'
            },
            {
                name:'Туники',
                path:'/catalog/clothes/woman/Tunics'
            },
            {
                name:'Футболки и топы',
                path:'/catalog/clothes/woman/Tshirts-and-tops'
            },
            {
                name:'Кроссовки',
                path:'/catalog/clothes/woman/Sneakers'
            },
            {
                name:'Халаты',
                path:'/catalog/clothes/woman/Bathrobes'
            },
            {
                name:'Шорты',
                path:'/catalog/clothes/woman/Shorts'
            },
            {
                name:'Юбки',
                path:'/catalog/clothes/woman/Skirts'
            },
            {
                name:'Купильники',
                path:'/catalog/clothes/woman/Skirts'
            },
            {
                name:'Белье',
                children: [
                    {   
                        name: 'Аксессуары',
                        path: '/catalog/prochee'
                    },
                    {   
                        name: 'Бандажи',
                        path: '/catalog/prochee'
                    },
                    {   
                        name: 'Бесшовные',
                        path: '/catalog/prochee'
                    },
                    {   
                        name: 'Боди и корсеты',
                        path: '/catalog/prochee'
                    },
                    {   
                        name: 'Бюстгальтеры и бюстье',
                        path: '/catalog/prochee'
                    },
                    {   
                        name: 'Колготки и чулки',
                        path: '/catalog/prochee'
                    },
                    {   
                        name: 'Комбинации и неглиже',
                        path: '/catalog/prochee'
                    },
                    {   
                        name: 'Комплекты белья',
                        path: '/catalog/prochee'
                    },
                    {   
                        name: 'Корректирующее белье',
                        path: '/catalog/prochee'
                    },
                    {   
                        name: 'Майки',
                        path: '/catalog/prochee'
                    },
                    {   
                        name: 'Термобелье',
                        path: '/catalog/prochee'
                    },
                    {   
                        name: 'Трусы',
                        path: '/catalog/prochee'
                    },
                ],
            },
            {
                name:'Подарки женщинам',
                children: [
                    {
                        name:'Автотовары',
                        path:'/catalog/prochee',
                    },
                    {
                        name:'Аксессуары',
                        path:'/catalog/prochee',
                    },
                    {
                        name:'Аксессуары для волос',
                        path:'/catalog/prochee',
                    },
                    {
                        name:'Для дома',
                        path:'/catalog/prochee',
                    },
                    {
                        name:'Игрушки',
                        path:'/catalog/prochee',
                    },
                    {
                        name:'Канцелярия и книги',
                        path:'/catalog/prochee',
                    },
                    {
                        name:'Красота',
                        path:'/catalog/prochee',
                    },
                    {
                        name:'Открытки и сувениры',
                        path:'/catalog/prochee',
                    },
                    {
                        name:'Для праздника',
                        path:'/catalog/prochee',
                    },
                    {
                        name:'Посуда',
                        path:'/catalog/prochee',
                    },
                    {
                        name:'Продукты',
                        path:'/catalog/prochee',
                    },
                    {
                        name:'Тапочки',
                        path:'/catalog/prochee',
                    },
                    {
                        name:'Хобби и творчество',
                        path:'/catalog/prochee',
                    },
                    {
                        name:'Бижутерные украшения',
                        path:'/catalog/prochee',
                    },
                    {
                        name:'Ювелирные украшения',
                        path:'/catalog/prochee',
                    },
                    {
                        name:'Именные подарки',
                        path:'/catalog/prochee',
                    },
                ],
            },
            {
                name:'Свадьба',
                children: [
                    {
                        name: 'Аксессуары',
                        path:'/catalog/prochee'
                    },
                    {
                        name: 'Белье',
                        path:'/catalog/prochee'
                    },
                    {
                        name: 'Обувь для невесты',
                        path:'/catalog/prochee'
                    },
                    {
                        name: 'Обувь для подружек невесты',
                        path:'/catalog/prochee'
                    },
                    {
                        name: 'Платья подружек невесты',
                        path:'/catalog/prochee'
                    },
                    {
                        name: 'Свадебные платья',
                        path:'/catalog/prochee'
                    },
                    {
                        name: 'Свадебная фата',
                        path:'/catalog/prochee'
                    },
                ],
            },
            {
                name:'Религиозная',
                children: [
                    {
                        name: 'Ислам',
                        path:'/catalog/prochee'
                    },
                    {
                        name: 'Православие',
                        path:'/catalog/prochee'
                    },
                ],
            },
        ]
    },
    {
        name: 'Мужчинам',
        children: [
            {
                name:'Верхняя одежда',
                path:'/catalog/man/outerwear'
            },
            {
                name:'Рубашки',
                path:'/catalog/man/Shirts'
            },
            {
                name:'Брюки',
                path:'/catalog/man/Trousers'
            },
            {
                name:'Джинсы',
                path:'/catalog/man/Jeans'
            },
            {
                name:'Комбинезоны',
                path:'/catalog/man/Overalls'
            },
            {
                name:'Костюмы',
                path:'/catalog/man/Costumes'
            },
            {
                name:'Лонгсливы',
                path:'/catalog/man/Longsleeves'
            },
            {
                name:'Пиджаки, жилеты и жакеты',
                path:'/catalog/man/Jackets-vests-and-jackets'
            },
            {
                name:'Толстовки, свитшоты и худи',
                path:'/catalog/man/Hoodies-sweatshirts-and-hoodies'
            },
            {
                name:'Футболки',
                path:'/catalog/man/Tshirts'
            },
            {
                name:'Футболки-Поло',
                path:'/catalog/man/Polo-shirts'
            },
            {
                name:'Кроссовки',
                path:'/catalog/man/Sneakers'
            },
            {
                name:'Халаты',
                path:'/catalog/man/Bathrobes'
            },
            {
                name:'Шорты',
                path:'/catalog/man/Shorts'
            },
            {
                name:'Белье',
                path:'/catalog/man/Underwear'
            },
            {
                name:'Подарки мужчинам',
                children: [
                    {   
                        name: 'Мужской уход',
                        path: '/catalog/prochee'
                    },
                    {   
                        name: 'Автотовары',
                        path: '/catalog/prochee'
                    },
                    {   
                        name: 'Аксессуары',
                        path: '/catalog/prochee'
                    },
                    {   
                        name: 'Тапочки',
                        path: '/catalog/prochee'
                    },
                    {   
                        name: 'Именные подарки',
                        path: '/catalog/prochee'
                    },
                    {   
                        name: 'Ювелирные украшения',
                        path: '/catalog/prochee'
                    },
                ],
            },
            {
                name: 'Свадьба',
                path:'/catalog/prochee'
            },
            {
                name: 'Пляжная одежда',
                path:'/catalog/prochee'
            },
            {
                name:'Религиозная',
                children: [
                    {
                        name: 'Ислам',
                        path:'/catalog/prochee'
                    },
                    {
                        name: 'Православие',
                        path:'/catalog/prochee'
                    },
                ],
            },
        ], 
    },
    {
        name: 'Обувь',
        children: [
            {
                name:'Детская',
                children: [
                    {
                        name:'Для девочек',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Для мальчиков',
                        path:'/catalog/prochee'
                    },
                ],
            },
            {
                name:'Для новорожденных',
                path:'/catalog/prochee'
            },
            {
                name:'Женская',
                children: [
                    {
                        name:'Балетки и чешки',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Босоножки и сандалии',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Ботинки и полуботинки',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Кеды и кроссовки',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Мокасины и топсайдеры',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Сабо и мюли',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Сапоги',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Тапочки',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Туфли и лоферы',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Шлепанцы и аквасоки',
                        path:'/catalog/prochee'
                    },
                ],
            },
            {
                name:'Мужская',
                children: [
                    {
                        name:'Ботинки и полуботинки',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Кеды и кроссовки',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Мокасины и топсайдеры',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Сапоги и унты',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Тапочки',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Туфли и лоферы',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Шлепанцы и аквасоки',
                        path:'/catalog/prochee'
                    },
                ],
            },
            {
                name:'Ортопедическая обувь',
                path:'/catalog/prochee'
            },
            {
                name:'Аксессуары для обуви',
                path:'/catalog/prochee'
            },
        ],
    },
    {
        name: 'Детям',
        children: [
            {
                name:'Для девочек',
                children: [
                    {
                        name:'Верхняя одежда',
                        path:'/catalog/woman/outerwear'
                    },
                    {
                        name:'Блузки и рубашки',
                        path:'/catalog/woman/Blouses-and-shirts'
                    },
                    {
                        name:'Брюки',
                        path:'/catalog/woman/Trousers'
                    },
                    {
                        name:'Джемперы, водолазки и кардиганы',
                        path:'/catalog/woman/Jumpers-turtlenecks-and-cardigans'
                    },
                    {
                        name:'Джинсы',
                        path:'/catalog/woman/Jeans'
                    },
                    {
                        name:'Комбинезоны',
                        path:'/catalog/woman/Overalls'
                    },
                    {
                        name:'Костюмы',
                        path:'/catalog/woman/Costumes'
                    },
                    {
                        name:'Лонгсливы',
                        path:'/catalog/woman/Longsleeves'
                    },
                    {
                        name:'Пиджаки, жилеты и жакеты',
                        path:'/catalog/woman/Jackets-vests-and-jackets'
                    },
                    {
                        name:'Платья и сарафаны',
                        path:'/catalog/woman/Dresses-and-sundresses'
                    },
                    {
                        name:'Толстовки, свитшоты и худи',
                        path:'/catalog/woman/Hoodies-sweatshirts-and-hoodies'
                    },
                    {
                        name:'Туники',
                        path:'/catalog/woman/Tunics'
                    },
                    {
                        name:'Футболки и топы',
                        path:'/catalog/woman/Tshirts-and-tops'
                    },
                    {
                        name:'Кроссовки',
                        path:'/catalog/woman/Sneakers'
                    },
                    {
                        name:'Халаты',
                        path:'/catalog/woman/Bathrobes'
                    },
                    {
                        name:'Шорты',
                        path:'/catalog/woman/Shorts'
                    },
                    {
                        name:'Юбки',
                        path:'/catalog/woman/Skirts'
                    },
                    {
                        name:'Купильники',
                        path:'/catalog/woman/Skirts'
                    },
                ],
            },
            {
                name:'Для мальчиков',
                children: [
                    {
                        name:'Верхняя одежда',
                        path:'/catalog/man/outerwear'
                    },
                    {
                        name:'Рубашки',
                        path:'/catalog/man/Shirts'
                    },
                    {
                        name:'Брюки',
                        path:'/catalog/man/Trousers'
                    },
                    {
                        name:'Джинсы',
                        path:'/catalog/man/Jeans'
                    },
                    {
                        name:'Комбинезоны',
                        path:'/catalog/man/Overalls'
                    },
                    {
                        name:'Костюмы',
                        path:'/catalog/man/Costumes'
                    },
                    {
                        name:'Лонгсливы',
                        path:'/catalog/man/Longsleeves'
                    },
                    {
                        name:'Пиджаки, жилеты и жакеты',
                        path:'/catalog/man/Jackets-vests-and-jackets'
                    },
                    {
                        name:'Толстовки, свитшоты и худи',
                        path:'/catalog/man/Hoodies-sweatshirts-and-hoodies'
                    },
                    {
                        name:'Футболки',
                        path:'/catalog/man/Tshirts'
                    },
                    {
                        name:'Футболки-Поло',
                        path:'/catalog/man/Polo-shirts'
                    },
                    {
                        name:'Кроссовки',
                        path:'/catalog/man/Sneakers'
                    },
                    {
                        name:'Халаты',
                        path:'/catalog/man/Bathrobes'
                    },
                    {
                        name:'Шорты',
                        path:'/catalog/man/Shorts'
                    },
                    {
                        name:'Белье',
                        path:'/catalog/man/Underwear'
                    },
                ],
            },
            {
                name:'Для новорожденных',
                children: [
                    {
                        name:'Аксессуары',
                        path:'/catalog/man/outerwear'
                    },
                    {
                        name:'Белье',
                        path:'/catalog/man/Shirts'
                    },
                    {
                        name:'Боди и ползунки',
                        path:'/catalog/man/Trousers'
                    },
                    {
                        name:'Брюки и шорты',
                        path:'/catalog/man/Jeans'
                    },
                    {
                        name:'Верхняя одежда',
                        path:'/catalog/man/Overalls'
                    },
                    {
                        name:'Жакеты и болеро',
                        path:'/catalog/man/Costumes'
                    },
                    {
                        name:'Комбинезоны и полукомбинезоны',
                        path:'/catalog/man/Longsleeves'
                    },
                    {
                        name:'Конверты и спальные мешки',
                        path:'/catalog/man/Jackets-vests-and-jackets'
                    },
                    {
                        name:'Костюмы и комплекты',
                        path:'/catalog/man/Hoodies-sweatshirts-and-hoodies'
                    },
                    {
                        name:'Кофточки и джемперы',
                        path:'/catalog/man/Tshirts'
                    },
                    {
                        name:'Одежда для дома',
                        path:'/catalog/man/Polo-shirts'
                    },
                    {
                        name:'Одежда для крещения',
                        path:'/catalog/man/Sneakers'
                    },
                    {
                        name:'Одежда на выписку',
                        path:'/catalog/man/Bathrobes'
                    },
                    {
                        name:'Пинетки',
                        path:'/catalog/man/Shorts'
                    },
                    {
                        name:'Платья и юбки',
                        path:'/catalog/man/Underwear'
                    },
                    {
                        name:'Распашонки',
                        path:'/catalog/man/Shorts'
                    },
                    {
                        name:'Футболки и топы',
                        path:'/catalog/man/Shorts'
                    },
                    {
                        name:'Халаты и пижамы',
                        path:'/catalog/man/Shorts'
                    },
                ],
            },
            {
                name:'Детское питание',
                path:'/catalog/man/outerwear'
            },
            {
                name:'Товары для малышей',
                children: [
                    {
                        name:'Аксессуары для кормления',
                        path:'/catalog/man/outerwear'
                    },
                    {
                        name:'Аксессуары для купания',
                        path:'/catalog/man/Shirts'
                    },
                    {
                        name:'Безопасность ребенка',
                        path:'/catalog/man/Trousers'
                    },
                    {
                        name:'Влажные салфетки',
                        path:'/catalog/man/Jeans'
                    },
                    {
                        name:'Гигиена и уход',
                        path:'/catalog/man/Overalls'
                    },
                    {
                        name:'Мебель',
                        path:'/catalog/man/Costumes'
                    },
                    {
                        name:'Пеленки, слюнявчики, царапки',
                        path:'/catalog/man/Longsleeves'
                    },
                    {
                        name:'Передвижение',
                        path:'/catalog/man/Jackets-vests-and-jackets'
                    },
                    {
                        name:'Постельные принадлежности',
                        path:'/catalog/man/Hoodies-sweatshirts-and-hoodies'
                    },
                ],
            },
            {
                name:'Подгузники',
                path:'/catalog/man/outerwear'
            },
            {
                name:'Подарки для детей',
                children: [
                    {
                        name:'Для дома',
                        path:'/catalog/man/outerwear'
                    },
                    {
                        name:'Игрушки',
                        path:'/catalog/man/Shirts'
                    },
                    {
                        name:'Книги и канцтовары',
                        path:'/catalog/man/Trousers'
                    },
                    {
                        name:'Косметика и уход',
                        path:'/catalog/man/Jeans'
                    },
                    {
                        name:'Носки',
                        path:'/catalog/man/Overalls'
                    },
                    {
                        name:'Открытки и сувениры',
                        path:'/catalog/man/Costumes'
                    },
                    {
                        name:'Посуда',
                        path:'/catalog/man/Longsleeves'
                    },
                    {
                        name:'Хобби и творчество',
                        path:'/catalog/man/Jackets-vests-and-jackets'
                    },
                    {
                        name:'Шарики и упаковка',
                        path:'/catalog/man/Hoodies-sweatshirts-and-hoodies'
                    },
                ],
            },
        ],
    },
    {
        name:'Для дома',
        children: [
            {
                name:'Ванная',
                children: [
                    {
                        name:'Аксессуары',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Для детей',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Коврики',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Мебель',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Зеркала',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Корзинки',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Шторы',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Полотенца',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Сантехника',
                        path:'/catalog/prochee'
                    },
                ],
            },
            {
                name:'Кухня',
                children: [
                    {
                        name:'Аксессуары для напитков',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Аксессуары для специй',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Бокалы и стаканы',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Выпечка и запекание',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Графины и кувшины',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Декоративная посуда',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Емкости для хранения',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Измельчители и соковыжималки',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Кастрюли и сковороды',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Кружки',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Кухонная утварь',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Кухонный декор',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Кухонный текстиль',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Магниты',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Ножи и аксессуары',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Посуда для микроволновой печи',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Порядок на кухне',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Разделочные доски',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Сервизы и наборы',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Сервировка стола',
                        children: [
                            {
                                name:'Столовое серебро',
                                path:'/catalog/prochee'
                            },
                            {
                                name:'Столовые приборы',
                                path:'/catalog/prochee'
                            },
                            {
                                name:'Тарелки и блюда',
                                path:'/catalog/prochee'
                            },
                            {
                                name:'Термопосуда',
                                path:'/catalog/prochee'
                            },
                        ],
                    },
                    {
                        name:'Фильтры для воды',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Хлебницы',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Чайники и кофейники',
                        path:'/catalog/prochee'
                    },
                ],
            },
            {
                name:'Предметы интерьера',
                children: [
                    {
                        name:'Бары',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Фонтаны',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Камины',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Картины и постеры',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Наклейки и декор',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Подушки и чехлы',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Свечи и подсвечники',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Часы',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Боксы для салфеток',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Термометры, барометры',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Фоторамки и фотоальбомы',
                        path:'/catalog/prochee'
                    },
                ],
            },
            {
                name:'Спальня',
                children: [
                    {
                        name:'Декорации настенные',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Зеркала',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Коврики комнатные',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Мебель',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Подушки декоративные',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Хранение вещей',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Постельные принадлежности',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Шторы',
                        path:'/catalog/prochee'
                    },
                ],
            },
            {
                name:'Гостиная',
                children: [
                    {
                        name:'Мебель',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Освещение',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Декорации настенные',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Коврики комнатные',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Коробки для хранения',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Подушки декоративные',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Шторы',
                        path:'/catalog/prochee'
                    },
                ],
            },
            {
                name:'Детская',
                children: [
                    {
                        name:'Безопасность',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Мебель',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Освещение',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Постельные принадлежности',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Предметы интерьера',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Шторы',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Хранение вещей',
                        path:'/catalog/prochee'
                    },
                ],
            },
            {
                name:'Досуг и творчество',
                children: [
                    {
                        name:'Коллекционирование',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Настольные игры',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Профессиональные музыкальные инструменты',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Творчество и рукоделие',
                        path:'/catalog/prochee'
                    },
                ],
            },
            {
                name:'Все для праздника',
                children: [
                    {
                        name:'Атрибутика',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Воздушные шарики и аксессуары',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Карнавальные товары',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Наборы для праздника',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Открытки',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Подарочная упаковка',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Украшения и декорации',
                        path:'/catalog/prochee'
                    },
                ],
            },
            {
                name:'Зеркала'
            },
            {
                name:'Коврики'
            },
            {
                name:'Кронштейны'
            },
            {
                name:'Освещение',
                children: [
                    {
                        name:'Абажуры',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Бра',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Комплектующие для светильников',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Лампочки',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Лампы для бытовой техники',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Люстры',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Ночники',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Прожекторы',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Светильники',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Светильники переносные',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Светильники уличные',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Светодиоды',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Светодиодные ленты',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Споты',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Торшеры',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Фитолампы для растений',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Фонарики бытовые',
                        path:'/catalog/prochee'
                    },
                ],
            },
            {
                name:'Для курения'
            },
            {
                name:'Отдых на природе',
                children: [
                    {
                        name:'Мангалы и коптильни',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Мебель и текстиль',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Посуда',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Развлечения',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Реппеленты',
                        path:'/catalog/prochee'
                    },
                ],
            },
            {
                name:'Парфюмерия для дома'
            },
            {
                name:'Прихожая',
                children: [
                    {
                        name:'Мангалы и коптильни',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Коврики придверные',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Освещение',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Мебель',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Хранение вещей',
                        path:'/catalog/prochee'
                    },
                ],
            },
            {
                name:'Религиия, эзотерика'
            },
            {
                name:'Сувенирная продукция'
            },
            {
                name:'Хозяйственные товары',
                children: [
                    {
                        name:'Аксессуары',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Бумага и пластик',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Ванная и туалет',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Глажка',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Кухня',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Против насекомых и грызунов',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Стирка',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Товары для уборки',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Уход за одеждой',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Уход за техникой',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Щетки и ролики',
                        path:'/catalog/prochee'
                    },
                ],
            },
            {
                name:'Хранение вещей',
                children: [
                    {
                        name:'Вакуумные пакеты, насосы',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Вешалки',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Держатели для медалей',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Держатели для украшений',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Ключницы настенные',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Коробки, корзинки, кейсы',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Крючки',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Магнитные держатели',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Мешки',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Органайзеры',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Подставки',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Системы хранения',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Чехлы для одежды',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Упаковочная пленка',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Шкатулки',
                        path:'/catalog/prochee'
                    },
                ],
            },
            {
                name:'Цветы, вазы и кашпо',
                children: [
                    {
                        name:'Вазы',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Горшки для растений',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Искусственные растения',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Кашпо',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Флорариумы',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Цветы стабилизированные',
                        path:'/catalog/prochee'
                    },
                ],
            },
            {
                name:'Шторы',
                children: [
                    {
                        name:'Аксессуары',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Жалюзи',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Карнизы',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Римские и рулонные шторы',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Тюли и гардины',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Фотошторы',
                        path:'/catalog/prochee'
                    },
                    {
                        name:'Шторы и портьеры',
                        path:'/catalog/prochee'
                    },
                ],
            },
        ],
    },
];

function Header_navbar() {

    const [isOpened, setIsOpened] = useState(false);
    const [level, setLevel] = useState(1);
    const [currentMenu, setCurrentMenu] = useState([menu])

    const selectLevel = (level, menu) => {
        if (!menu) {
            return;
        }
        setLevel(level);
        setCurrentMenu(l => {
            l[level] = menu;
            return l;
        }); 
    }

    const backLevel = () => {
        setLevel(level - 1);

        setCurrentMenu(l => {
            l[level] = [];
            return l;
        }); 
    }

        return (
            <>

                <div className='Header_navbar'>
                    <NavLink to={ROUTES.Login}><img src={user_solid} alt='user_solid'/></NavLink>
                    <NavLink to={ROUTES.Basket}><img src={cart_shopping} alt='cart_shopping'/></NavLink>
                    <NavLink><img src={bars_solid} onClick={() => setIsOpened(!isOpened)} alt='bars_solid'/></NavLink>
                </div>

                <CatalogMenu isVisible={isOpened} setIsVisible={setIsOpened}/>

                {/*{isOpened && <nav className='menu' role='navigation'>*/}
                {/*    <div onClick={() => setIsOpened(!isOpened)} className={cn('cover', {['coverShow']: isOpened})}/>*/}
                {/*    <div className={cn('mobileMenuBox', {['mobileMenuBoxShow']: isOpened})}>*/}
                {/*        <div className='menuHeader'>*/}
                {/*            {level > 1 && (*/}
                {/*                <button className='backButton' onClick={() => backLevel()}>*/}
                {/*                    <img src={backButton}/>*/}
                {/*                    Назад*/}
                {/*                </button>*/}
                {/*            )}*/}
                {/*            {level === 1 && <div className='backButton'>Каталог</div>}*/}
                {/*            <button className='closeButton' onClick={() => setIsOpened(!isOpened)}>*/}
                {/*                <img src={xmark} />*/}
                {/*            </button>*/}
                {/*        </div>*/}
                {/*        <div className='level' style={{ transform: `translateX(calc(-100% * ${level - 1} - 24px * ${level - 1}))`}}>*/}
                {/*            {currentMenu.map((item, i) => (*/}
                {/*                <div key = {i}>*/}
                {/*                    {item.map((m, index) => (*/}
                {/*                        <div key = {m.name}>*/}
                {/*                            {m.children && (<button className='catalog-item' onClick = {() => selectLevel(level + 1, m.children)}>{m.name}<img src={rightArrow}/></button>)}*/}
                {/*                            {m.path && (<a className='catalog-item' href = {m.path}>{m.name}</a>)}*/}
                {/*                        </div>*/}
                {/*                    ))}*/}
                {/*                </div>*/}
                {/*            ))}*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</nav>}*/}
            </>
        );
}

export default Header_navbar;

