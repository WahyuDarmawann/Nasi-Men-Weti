import logograb from '../img/grab-logo.png';
import logogojek from '../img/gojek-logo.png';
import logoshopeefood from '../img/shopeefood-logo.png';
import '../css/style.css';
import '../components/apps-slider'
import AppSlider from '../components/apps-slider';
import AOS from 'aos';
import 'aos/dist/aos.css';

function OrderApps(){
    AOS.init();
    const duplicateCount = 4;
    
    return(
        <section className="orderapps-section">
            <div className="orderapps-container-row1">
                <div className="orderapps-col1" data-aos="fade-down-left" data-aos-duration="2000">
                    <h1>You can order through apps</h1>
                    <p>Enjoy the convenience of ordering directly  from app, anytime, anywhere!</p>
                </div>

                <div className='orderapps-button-container'>
                    <div className='button-apps' data-aos="fade-down-left" data-aos-duration="1500">
                        <a href="https://r.grab.com/g/6-20241104_094834_c3f9000f699b0f81_MEXMPS-AWlSEjvhcEjWIUmPtPdG" target='_blank' rel="noopener noreferrer">
                            <img src={logograb} alt="" />
                            <p>Order Now!</p>
                        </a>
                    </div>
                    <div className='button-apps' data-aos="fade-down-left" data-aos-duration="1000">
                        <a href="https://gofood.link/a/yM97km9" target='_blank' rel="noopener noreferrer">
                            <img src={logogojek} alt="" />
                            <p>Order Now!</p>
                        </a>
                    </div>
                    <div className='button-apps' data-aos="fade-down-left" data-aos-duration="500">
                        <a href="https://shopee.co.id/universal-link/now-food/shop/1599037?deep_and_deferred=1&shareChannel=copy_link" target='_blank' rel="noopener noreferrer">
                            <img src={logoshopeefood} alt="" />
                            <p>Order Now!</p>
                        </a>
                    </div>
                </div>
            </div>
                
            <div className='container-apps-order' data-aos="fade-down-right" data-aos-duration="900">
            {Array.from({ length: duplicateCount }, (_, index) => (
                <AppSlider key={index} />
            ))}
            </div>
           
        </section>
    );
}

export default OrderApps;