import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import Divider from '../Components/Divider';
const Coverflow = require('react-coverflow');

//npm install swiper react-spring-3d-carousel
//npm install react-round-carousel
//npm install react-coverflow

const HorizontalList = () => {

    const handleOnClick = () => {

    }

    const handleOnKeyDown = () => {

    }

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


            <Coverflow
                width={960}
                height={480}
                displayQuantityOfSide={3}
                navigation={false}
                enableHeading={true}
                infiniteScroll={true}
                active={0}
            >
                <div
                    onClick={() => handleOnClick}
                    onKeyDown={() => handleOnKeyDown}
                    role="menuitem"
                >
                    <img src='https://arashaltafi.ir/arash.jpg' alt='title or description' style={{ display: 'block', width: '100%' }}
                    />
                </div>
                <img src='https://arashaltafi.ir/arash.jpg' alt='title or description' data-action="https://arashaltafi.ir/arash.jpg" />
                <img src='https://arashaltafi.ir/arash.jpg' alt='title or description' data-action="https://arashaltafi.ir/arash.jpg" />
                <img src='https://arashaltafi.ir/arash.jpg' alt='title or description' data-action="https://arashaltafi.ir/arash.jpg" />
                <img src='https://arashaltafi.ir/arash.jpg' alt='title or description' data-action="https://arashaltafi.ir/arash.jpg" />
            </Coverflow>



            <Divider />


            <div className='w-full py-32'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="swiper1"
                >
                    <SwiperSlide className='swiper-slide1'>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide1'>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide1'>
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide1'>
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide1'>
                        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide1'>
                        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide1'>
                        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide1'>
                        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide1'>
                        <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                    </SwiperSlide>
                </Swiper>
            </div>

        </>
    );
}

export default HorizontalList