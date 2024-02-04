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
        <div className='flex flex-col items-center justify-center gap-16 py-16'>
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


            <Swiper
                className="w-[80%] mx-auto"
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                modules={[Navigation]}
                centeredSlides={true}
                centeredSlidesBounds={true}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{ clickable: true }}
            >
                <SwiperSlide className="size-[200px] rounded-lg overflow-hidden"><img className='w-full h-full' src='https://arashaltafi.ir/Social_Media/story-00.jpg' /></SwiperSlide>
                <SwiperSlide className="size-[200px] rounded-lg overflow-hidden"><img className='w-full h-full' src='https://arashaltafi.ir/Social_Media/story-01.jpg' /></SwiperSlide>
                <SwiperSlide className="size-[200px] rounded-lg overflow-hidden"><img className='w-full h-full' src='https://arashaltafi.ir/Social_Media/story-02.jpg' /></SwiperSlide>
                <SwiperSlide className="size-[200px] rounded-lg overflow-hidden"><img className='w-full h-full' src='https://arashaltafi.ir/Social_Media/story-03.jpg' /></SwiperSlide>
                <SwiperSlide className="size-[200px] rounded-lg overflow-hidden"><img className='w-full h-full' src='https://arashaltafi.ir/Social_Media/story-04.jpg' /></SwiperSlide>
                <SwiperSlide className="size-[200px] rounded-lg overflow-hidden"><img className='w-full h-full' src='https://arashaltafi.ir/Social_Media/story-05.jpg' /></SwiperSlide>
                <SwiperSlide className="size-[200px] rounded-lg overflow-hidden"><img className='w-full h-full' src='https://arashaltafi.ir/Social_Media/story-06.jpg' /></SwiperSlide>


            </Swiper>

            <div className='flex flex-row items-center justify-center gap-8'>
                <div className="swiper-button-prev btnError cursor-pointer">Prev</div>
                <div className="swiper-button-next btnSuccess cursor-pointer">Next</div>
            </div>



            <Divider />




            <Swiper
                className="w-[80%] mx-auto"
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                centeredSlides={true}
                centeredSlidesBounds={true}
                effect={'coverflow'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{ clickable: true }}
            >
                <SwiperSlide className="size-[200px] rounded-lg overflow-hidden"><img className='w-full h-full' src='https://arashaltafi.ir/Social_Media/story-00.jpg' /></SwiperSlide>
                <SwiperSlide className="size-[200px] rounded-lg overflow-hidden"><img className='w-full h-full' src='https://arashaltafi.ir/Social_Media/story-01.jpg' /></SwiperSlide>
                <SwiperSlide className="size-[200px] rounded-lg overflow-hidden"><img className='w-full h-full' src='https://arashaltafi.ir/Social_Media/story-02.jpg' /></SwiperSlide>
                <SwiperSlide className="size-[200px] rounded-lg overflow-hidden"><img className='w-full h-full' src='https://arashaltafi.ir/Social_Media/story-03.jpg' /></SwiperSlide>
                <SwiperSlide className="size-[200px] rounded-lg overflow-hidden"><img className='w-full h-full' src='https://arashaltafi.ir/Social_Media/story-04.jpg' /></SwiperSlide>
                <SwiperSlide className="size-[200px] rounded-lg overflow-hidden"><img className='w-full h-full' src='https://arashaltafi.ir/Social_Media/story-05.jpg' /></SwiperSlide>
                <SwiperSlide className="size-[200px] rounded-lg overflow-hidden"><img className='w-full h-full' src='https://arashaltafi.ir/Social_Media/story-06.jpg' /></SwiperSlide>


            </Swiper>

            <div className='flex flex-row items-center justify-center gap-8'>
                <div className="swiper-button-prev btnError cursor-pointer">Prev</div>
                <div className="swiper-button-next btnSuccess cursor-pointer">Next</div>
            </div>



            <Divider />



            <Swiper
                className="w-[80%] mx-auto mySwiper"
                grabCursor={true}
                centeredSlides={true}
                centeredSlidesBounds={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                effect={'coverflow'}
                modules={[EffectCoverflow, Pagination]}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{ clickable: true }}
            >
                <SwiperSlide className="size-[200px] rounded-lg overflow-hidden"><img className='w-full h-full' src='https://arashaltafi.ir/Social_Media/story-00.jpg' /></SwiperSlide>
                <SwiperSlide className="size-[200px] rounded-lg overflow-hidden"><img className='w-full h-full' src='https://arashaltafi.ir/Social_Media/story-01.jpg' /></SwiperSlide>
                <SwiperSlide className="size-[200px] rounded-lg overflow-hidden"><img className='w-full h-full' src='https://arashaltafi.ir/Social_Media/story-02.jpg' /></SwiperSlide>
                <SwiperSlide className="size-[200px] rounded-lg overflow-hidden"><img className='w-full h-full' src='https://arashaltafi.ir/Social_Media/story-03.jpg' /></SwiperSlide>
                <SwiperSlide className="size-[200px] rounded-lg overflow-hidden"><img className='w-full h-full' src='https://arashaltafi.ir/Social_Media/story-04.jpg' /></SwiperSlide>
                <SwiperSlide className="size-[200px] rounded-lg overflow-hidden"><img className='w-full h-full' src='https://arashaltafi.ir/Social_Media/story-05.jpg' /></SwiperSlide>
                <SwiperSlide className="size-[200px] rounded-lg overflow-hidden"><img className='w-full h-full' src='https://arashaltafi.ir/Social_Media/story-06.jpg' /></SwiperSlide>


            </Swiper>

            <div className='flex flex-row items-center justify-center gap-8'>
                <div className="swiper-button-prev btnError cursor-pointer">Prev</div>
                <div className="swiper-button-next btnSuccess cursor-pointer">Next</div>
            </div>




        </div>
    );
}

export default HorizontalList