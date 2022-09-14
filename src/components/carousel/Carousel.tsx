import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Image, NextButton, PreviousButton } from './Carousel.style';

import image1 from '../../assets/images/store.jpg';
import image2 from '../../assets/images/grocery.jpg';
import image3 from '../../assets/images/lovat-lane.jpg';
import image4 from '../../assets/images/supermarket.jpg';
import image5 from '../../assets/images/choctaw-bluff.jpg';

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <PreviousButton />,
        nextArrow: <NextButton />,
        appendDots: (dots: any) => (
            <div
                style={{
                    borderRadius: '10px',
                    padding: '10px',
                    bottom: '4%',
                }}
            >
                <ul style={{ margin: '0px' }}> {dots} </ul>
            </div>
        ),
    };

    return (
        <>
            <Slider {...settings}>
                <Image src={image1} alt="" />
                <Image src={image2} alt="" />
                <Image src={image3} alt="" />
                <Image src={image4} alt="" />
                <Image src={image5} alt="" />
            </Slider>
        </>
    );
}

export default Carousel;
