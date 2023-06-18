import React from 'react'
import vk from '../../images/vk logo.svg'
import tg from '../../images/tg logo.svg'
import tok from '../../images/tok logo.svg'
import './style.css'

import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <Link to="/" className="logo">li_lingere</Link>
                    </div>
                    <div className="nav">
                        <Link className="nav_links" to="/">Главная</Link>
                        <Link className="nav_links" to="catalog">Коллекция</Link>
                        <Link className="nav_links" to="contacts">О нас</Link>
                        <Link className="nav_links" to="dostavka">Контакты</Link>
                        <Link className="nav_links" to="dostavka">Корзина</Link>
                    </div>
                    <div className="header__icon">
                        <a><img src={tg}/></a>
                        <a><img src={vk}/></a>
                        <a><img src={tok}/></a>
                    </div>
                </div>
                <div className="row">
                    <a href="#" className="row__link">Девушкам</a>
                    <a href="#" className="row__link">Мужчинам</a>
                    <a href="#" className="row__link">Унисекc</a>
                </div>
            </div>
        </header>
    )
}

export default Header