import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '../../assets/images/store.jpg';
import image2 from '../../assets/images/grocery.jpg';
import image3 from '../../assets/images/lovat-lane.jpg';
import image4 from '../../assets/images/supermarket.jpg';
import image5 from '../../assets/images/choctaw-bluff.jpg';

import { Image, NextButton, PreviousButton, Wrapper } from './Carousel.style';

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
    <PreviousButton />
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }: any) => (
    <NextButton />
);

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        appendDots: (dots: any) => (
            <div
                style={{
                    borderRadius: '10px',
                    bottom: '4%',
                }}
            >
                <ul style={{ margin: '0px' }}> {dots} </ul>
            </div>
        ),
    };

    return (
        <Wrapper>
            <Slider {...settings}>
                <Image src={image1} alt="이미지1" />
                <Image src={image2} alt="이미지2" />
                <Image src={image3} alt="이미지3" />
                <Image src={image4} alt="이미지4" />
                <Image src={image5} alt="이미지5" />
            </Slider>
        </Wrapper>
    );
}

export default Carousel;
