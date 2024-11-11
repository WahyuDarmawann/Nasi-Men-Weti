import React, { useState } from 'react';
import '../css/style.css'
import logograb from '../img/grab-logo.png'
import logogojek from '../img/gojek-logo.png'
import logoshopeefood from '../img/shopeefood-logo.png'

function AppSlider() {
    return(
        <div className='apps-order'>
            <img src={logograb} alt="grab" />
            <img src={logogojek} alt="gojek" />
            <img src={logoshopeefood}alt="shopeefood" />
        </div>
    );
}

export default AppSlider;