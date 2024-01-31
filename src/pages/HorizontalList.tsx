import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import Divider from '../Components/Divider';

//npm install swiper react-spring-3d-carousel
const HorizontalList = () => {

    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                loop={true}
                modules={[EffectCards]}
                className="swiper mt-32"
            >
                <SwiperSlide className='swiper-slide'>Slide 1</SwiperSlide>
                <SwiperSlide className='swiper-slide'>Slide 2</SwiperSlide>
                <SwiperSlide className='swiper-slide'>Slide 3</SwiperSlide>
                <SwiperSlide className='swiper-slide'>Slide 4</SwiperSlide>
                <SwiperSlide className='swiper-slide'>Slide 5</SwiperSlide>
                <SwiperSlide className='swiper-slide'>Slide 6</SwiperSlide>
                <SwiperSlide className='swiper-slide'>Slide 7</SwiperSlide>
                <SwiperSlide className='swiper-slide'>Slide 8</SwiperSlide>
                <SwiperSlide className='swiper-slide'>Slide 9</SwiperSlide>
            </Swiper>


            <Divider />


            <Carousel
                slides={[
                    {
                        key: 1,
                        content: <img src="https://arashaltafi.ir/arash.jpg" />
                    },
                    {
                        key: 2,
                        content: <img src="https://arashaltafi.ir/arash.jpg" />
                    },
                    {
                        key: 3,
                        content: <img src="https://arashaltafi.ir/arash.jpg" />
                    }
                ]}
                goToSlide={1}
                offsetRadius={2}
                showNavigation={true}
                animationConfig={config.gentle}
            />

        </>
    );
}

export default HorizontalList