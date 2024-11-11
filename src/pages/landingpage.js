import React from 'react';
import '../css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Typewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';

function LandingPage() {
    AOS.init();
    return(
        <section id='landingpage' className='hero-landingpage'>
            <div className="landingpage-container">
                <div className="landingpage-col1" data-aos="fade-right" data-aos-duration= "1000">
                    <h1>Where Flavor</h1>
                    <h1>Meets {' '}
                    <span>
                        <Typewriter 
                          words={['Excellence', 'Satisfaction', 'Passion', 'Delight']}
                          loop={true}
                          cursor
                          cursorStyle='|'
                          typeSpeed={80}
                          deleteSpeed={100}
                          delaySpeed={1000}
                        />
                    </span>
                    </h1>
                    <p>Crafted with precision and passion, bringing you a perfect balance of flavor that will satisfy your cravings </p>
                    <div className='button-menu'>
                        <a href="#menu">See Our Menus</a>
                        <FontAwesomeIcon className='icon-arrow' icon={faArrowRight} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LandingPage;