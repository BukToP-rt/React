import React from 'react'
import vk from '../../images/vk logo.svg'
import tg from '../../images/tg logo.svg'
import tok from '../../images/tok logo.svg'
import './style.css'


const Footer = () => {
    return (
        <footer className="footer">
                <div className="footer__inner">
                    <div className="footer__link">
                        Подписываясь на рассылку, Вы соглашаетесь c условиями <a href="#">политики конфидициальности</a> и <a href="#">политики на обработку персональных данных</a>
                    </div>
                
                    <div className="footer__logo">
                        <p align="center"><a href="#" className="logo">li_lingere</a></p>
                        <p align="center"> &copy; 2023 GruboGovory</p>
                    </div>
                    <div className="footer__icon">
                        <a><img src={vk}/></a>
                        <a><img src={tg}/></a>
                        <a><img src={tok}/></a>
                    </div>
                </div>
            </footer>
    )
}

export default Footer