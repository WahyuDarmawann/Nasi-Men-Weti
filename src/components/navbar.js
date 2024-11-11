import React, { useEffect, useState } from 'react';
import logomenweti from '../img/logo_menweti.png';
import '../css/style.css';

function Navbar() {
    const [navbarStyle, setNavbarStyle] = useState({
        padding: '0px 10px',
        width: '100px',
        height: '100px',
        backgroundColor : 'transparent'
    });

    const [buttonNavbarStyle, setButtonNavbarStyle] = useState({
        backgroundColor : '#1A1A19',
        color : '#F6FCDF',
        padding : '12px 25px',
        borderRadius: '30px',
        fontSize: '1rem'

    });

    const handleScroll = () => {
        const isSmallScreen = window.matchMedia('(max-width: 426px)').matches;

        if (window.scrollY > 30) {
            setNavbarStyle({
                padding: '5px 10px',
                width: isSmallScreen ? '155px' : '80px',
                height: isSmallScreen ? '155px' : '80px',
                backgroundColor: '#1A1A19',
            });

            setButtonNavbarStyle({
                backgroundColor: 'transparent',
                color : '#F6FCDF',
                border : isSmallScreen ? '4px solid #F6FCDF' : '2px solid #F6FCDF',
                padding : isSmallScreen ? '24px 50px' : '12px 25px',
                borderRadius: isSmallScreen ? '60px': '30px',
                fontSize: isSmallScreen ? '1.6rem' : '1rem'
            });
            

        } else {
            setNavbarStyle({
                padding: '0px 10px',
                width: isSmallScreen ? '175px' : '100px',
                height: isSmallScreen ? '175px' : '100px',
                backgroundColor : 'transparent'
            });

            setButtonNavbarStyle({
                backgroundColor: 'transparent',
                color : '#F6FCDF',
                border : isSmallScreen ? '4px solid #F6FCDF' : '2px solid #F6FCDF',
                padding : isSmallScreen ? '24px 50px' : '12px 25px',
                borderRadius: isSmallScreen ? '60px': '30px',
                fontSize: isSmallScreen ? '1.6rem' : '1rem'
            });
        }
    };

    const updateNavbarStyleBasedOnScreenSize = () => {
        const isSmallScreen = window.matchMedia('(max-width: 426px)').matches;

        if (isSmallScreen) {
            setNavbarStyle({
                padding: '10px 5px',
                width: '175px',
                height: '175px',
                backgroundColor: navbarStyle.backgroundColor 
            });
            setButtonNavbarStyle({
                backgroundColor: '#1A1A19',
                color : '#F6FCDF',
                border : isSmallScreen ? '4px solid #F6FCDF' : '2px solid #F6FCDF',
                padding : isSmallScreen ? '24px 50px' : '12px 25px',
                borderRadius: isSmallScreen ? '60px': '30px',
                fontSize: isSmallScreen ? '1.6rem' : '1rem'
            });

        } else {
            // Kembali ke default untuk layar yang lebih besar
            setNavbarStyle({
                padding: '0px 10px',
                width: '100px',
                height: '100px',
                backgroundColor: navbarStyle.backgroundColor // biarkan background sesuai scroll
            });
            setButtonNavbarStyle({
                backgroundColor: 'transparent',
                color : '#F6FCDF',
                border : isSmallScreen ? '4px solid #F6FCDF' : '2px solid #F6FCDF',
                padding : isSmallScreen ? '24px 50px' : '12px 25px',
                borderRadius: isSmallScreen ? '60px': '30px',
                fontSize: isSmallScreen ? '1.6rem' : '1rem'
            });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize',updateNavbarStyleBasedOnScreenSize);

        updateNavbarStyleBasedOnScreenSize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateNavbarStyleBasedOnScreenSize);
        };
    }, []);

    return (
        <header>
            <nav id="navbar" className='navbar-container' style={{ padding: navbarStyle.padding, backgroundColor: navbarStyle.backgroundColor }}>
                <a href="#landingpage" id="icon">
                    <img className='logo' src={logomenweti} alt="logo" style={{ width: navbarStyle.width , height:navbarStyle.height}} />
                </a>
                <a className='button-nav' style={{backgroundColor: buttonNavbarStyle.backgroundColor, color : buttonNavbarStyle.color, border:buttonNavbarStyle.border, padding:buttonNavbarStyle.padding, borderRadius:buttonNavbarStyle.borderRadius, fontSize:buttonNavbarStyle.fontSize}} href="https://wa.me/6281236033673" target='_blank' rel="noopener noreferrer">Order Now!</a>
            </nav>
        </header>
    );
}

export default Navbar;