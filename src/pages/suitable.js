import '../css/style.css';
import gatheringpic from '../img/gathering_pic.svg';
import breakfastpic from '../img/breakfast-pic.svg';
import lunchpic from '../img/lunch-pic.svg';
import overtimeworkpic from '../img/overtimework-pic.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Suitable() {
    AOS.init();
    return(
        <section className='suitable-section'>
            <div className='suitable-header' data-aos="fade-down-right" data-aos-duration="500">
                <h1>Suitable to be eaten in various situations</h1>
            </div>
            <div className='suitable-item-container'>
                <div className='suitable-item' data-aos="fade-down-right" data-aos-duration="500">
                    <img src={gatheringpic} alt="gathering-pic" />
                    <h4>Gathering</h4>
                    <p>This chicken rice dish is perfect for sharing with friends or family. Its delicious taste makes any gathering feel warmer and more enjoyable</p>
                </div>
                <div className='suitable-item' data-aos="fade-down-right" data-aos-duration="1000">
                    <img src={breakfastpic} alt="breakfast-pic" />
                    <h4>Breakfast Time</h4>
                    <p>This warm, protein-rich chicken rice is perfect for starting your day full of energy. Simple and delicious, it’s an ideal choice for your busy mornings</p>
                </div>
                <div className='suitable-item' data-aos="fade-down-right" data-aos-duration="1500">
                    <img src={lunchpic} alt="lunch-pic" />
                    <h4>Lunch Time</h4>
                    <p>Enjoy chicken rice as a filling and tasty lunch. The tender chicken and fluffy rice combination will keep you energized throughout the day</p>
                </div>
                <div className='suitable-item' data-aos="fade-down-right" data-aos-duration="2000">
                    <img src={overtimeworkpic} alt="overtimework-pic" />
                    <h4>Overtime Work</h4>
                    <p>This savory and satisfying chicken rice is here to keep you fueled until the job is done</p>
                </div>
            </div>
        </section>
    );
}
export default Suitable;