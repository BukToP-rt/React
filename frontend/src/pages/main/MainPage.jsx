import React from 'react'
import './style.css' 
import vk from './images/vk logo.svg'
import tg from './images/tg logo.svg'
import tok from './images/tok logo.svg'
import Card from '../../components/Card/Card'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Location from '../../images/Location.jpg'
import Slide from '../../images/slide.png'
import Slide1 from '../../images/slide1.jpg'
import Slide2 from '../../images/slide2.jpg'
import { useNavigate } from "react-router-dom";



const MainPage = () => {
    const navigate = useNavigate();
    return (<>
        <div className="wrapper">
            <section className="content">
                
                    <div className="offer">
                        <div className="logo">li_lingere</div>
                        <div className="title">Рюкзаки для каждого </div>
                        <p className='offer-text'>На каждый день</p>
                        <a href="#">
                            <div className="button">Каталог</div>
                        </a>
                    </div>
                    <div className="title-slider">На этот сезон</div>

                    <div className="slidershow middle">
                    <div className="navigation">
                            <label htmlFor="r1" className="bar"></label>
                            <label htmlFor="r2" className="bar"></label>
                            <label htmlFor="r3" className="bar"></label>
                            <label htmlFor="r4" className="bar"></label>
                            <label htmlFor="r5" className="bar"></label>
                        </div>
                        <div className="slides">
                            <input type="radio" name='r' id='r1' />
                            <input type="radio" name='r' id='r2'  />
                            <input type="radio" name='r' id='r3'  />
                            <input type="radio" name='r' id='r4' />
                            <input type="radio" name='r' id='r5' />
                            <div className="slide s1">
                                <img src={Slide} alt="" />
                                <div className="text-button">
                                <div className="text-box">текст описания конкретной колецкии с возможным дополнением уникальности</div>
                            </div>
                            </div>
                            <div className="slide">
                                <button className='button-slide' onClick={ () => navigate("/catalog")} >Каталог</button>
                                <img src={Slide1} alt="" />
                            </div>
                            <div className="slide">
                                <img src={Slide2} alt="" />
                            </div>
                            <div className="slide">
                                <img src={Slide1} alt="" />
                            </div>
                            <div className="slide">
                                <img src={Slide2} alt="" />
                            </div>
                            
                        </div>

                        
                    </div>
        
                    <div className="title-list">Актуальное</div>
                    <div className="cards">
                        <Card name='Рюкзак черный' price='2350' imagePath='/backpack.jpg' />
                        <Card name='Рюкзак белый' price='7000' imagePath='/2.jpg'/>
                        <Card name='Рюкзак черный' price='2350' imagePath='/backpack.jpg' />
                        <Card name='Рюкзак белый' price='7000' imagePath='/2.jpg'/>
                   </div>
                   <div className="title-contacts">Мы всегда на связи</div>
                    <div className="info-box">
                        <div className="contacts-image">
                            <img className="location-image" src={Location} alt="Location" />
                        </div>
                        <div className="contacts-info"> 
                            <p><a href="tel:+79008880033">8 (900)888-00-33</a></p>
                            <p><a href="mailto:li_lingere@mail.ru">li_lingere@mail.ru</a></p>
                            <div className='logo-box'>
                                <img className="contacts_logo" src={tg} alt="telegram" />
                                <img className="contacts_logo" src={vk} alt="Vkontakte" />
                                <img className="contacts_logo" src={tok} alt="tik-tok" />
                            </div>
                        </div>
                   </div>
            </section>            
        </div>
    </>);
};

export default MainPage