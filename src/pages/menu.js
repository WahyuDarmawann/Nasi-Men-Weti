import '../css/style.css';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import dataMenu from '../datamenu';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Menu() {
    AOS.init();
    return (
        <section id='menu' className="menu-section">
            <div className='menu-header' data-aos="fade-up" data-aos-duration="500">
                <h1>Our Menus</h1>
            </div>

            <div className='menu-items-container'>
                {dataMenu.map((item) => (
                <div className='menu-items' data-aos="zoom-in-up" data-aos-duration="1000">
                    <div className='menu-pic'>
                        <img src={item.img} alt={item.foodtitle} />
                    </div>  
                    <div className='menu-info'>
                        <div className='menu-info-box'>
                            <h3>{item.foodtitle} - <span className='menu-price'>{item.price}</span></h3>
                            <p>{item.descfood}</p>
                                <div className='menu-rating'>
                                <FontAwesomeIcon className='icon-star' icon={faStar} />
                                <span>4.9</span>
                        </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </section>
    );
}

export default Menu;
