import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import 'boxicons';
import { InstagramLogo, FacebookLogo } from "@phosphor-icons/react";
import logograb from '../img/grab-logo.png';
import logogojek from '../img/gojek-logo.png';
import logoshopeefood from '../img/shopeefood-logo.png';

function Footer() {
    return(
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-col1">
                    <h2>Contact Us</h2>
                    <div className="footer-col1-item">
                        <a href="https://wa.me/6281236033673" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className="col1-icon" icon={faPhone} />
                            <h4>0812-3603-3673</h4>
                        </a>
                    </div>
                    <div className="footer-col1-item">
                        <a href="https://wa.me/6285338509922" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className="col1-icon" icon={faPhone} />
                            <h4>0813-3850-9922</h4>
                        </a>
                    </div>
                </div>

                <div className="footer-col2">
                    <h2>Order in Apps</h2>
                    <div className="footer-col2-picture-container">
                        <div className="footer-col2-picture">
                            <a href="https://r.grab.com/g/6-20241104_094834_c3f9000f699b0f81_MEXMPS-AWlSEjvhcEjWIUmPtPdG" target='_blank' rel="noopener noreferrer">
                                <img src={logograb} alt="grab" />
                            </a>
                        </div>
                        <div className="footer-col2-picture">
                            <a href="https://gofood.link/a/yM97km9" target='_blank' rel="noopener noreferrer">
                                <img src={logogojek} alt="gojek" />
                            </a>
                        </div>
                        <div className="footer-col2-picture">
                            <a href="">
                                <img src={logoshopeefood} alt="shopeefood" />
                            </a>
                        </div>
                    </div>
                    
                </div>

                <div className="footer-col3">
                    <h2>Connect with Us</h2>
                    <div className="footer-col3-items-container">
                        <div className="footer-col3-items">
                            <a href="https://www.instagram.com/menweti.denpasar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank' rel="noopener noreferrer">
                                <InstagramLogo className="icon-sosmed"/>
                            </a>
                        </div>
                        <div className="footer-col3-items">
                            <a href="https://www.instagram.com/menweti.denpasar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank' rel="noopener noreferrer">
                                <FacebookLogo className="icon-sosmed"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-container">
                <p>&copy; 2024 &bull; <a style={{textDecoration: 'none', color: '#b9ee2a'}} href="https://www.instagram.com/md.drmwn/?utm_source=ig_web_button_share_sheet" target='_blank' rel="noopener noreferrer">Wahyu Darmawan</a> | All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;