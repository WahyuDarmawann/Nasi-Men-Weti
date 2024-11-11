import '../css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill1 } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Features () {
    AOS.init();
    return(
        <div className="features-container">
            <div className="features-content" data-aos="fade-down" data-aos-duration= "500">
            <FontAwesomeIcon className='features-icon' icon={faThumbsUp} />
                <h5>Quality Ingredients</h5>
                <p>Enjoy dishes with a selection of fresh and high-quality ingredients, guaranteeing a natural and delicious taste in every bite</p>
            </div>
            <div className="features-content" data-aos="fade-down" data-aos-duration= "900">
            <FontAwesomeIcon className='features-icon' icon={faMoneyBill1} />
                <h5>Affordable Price</h5>
                <p>Enjoy delicious dishes without having to dig deep into your pockets, with competitive prices for the best quality</p>
            </div>
            <div className="features-content" data-aos="fade-down" data-aos-duration= "1300">
            <FontAwesomeIcon className='features-icon' icon={faUtensils} />
                <h5>Authentic and Delicious Flavors</h5>
                <p>Enjoy dishes with a selection of fresh and high-quality ingredients, guaranteeing a natural and delicious taste in every bite</p>
            </div>
            <div className="features-content" data-aos="fade-down" data-aos-duration= "1700">
            <FontAwesomeIcon className='features-icon' icon={faAward} />
                <h5>Trusted for a Long Time</h5>
                <p>Years of being a favorite, delivering consistent and trusted quality and taste</p>
            </div>
        </div>
    );
}

export default Features;