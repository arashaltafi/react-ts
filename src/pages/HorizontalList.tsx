import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import { EffectCards, EffectCoverflow, Pagination, Navigation, EffectCube } from 'swiper/modules';
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



            <p>basic slider with prev next</p>
            <Swiper
                className="w-[80%] mx-auto"
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                modules={[Navigation]}
                centeredSlides={true}
                centeredSlidesBounds={true}
                navigation={{
                    nextEl: '.swiper-button-next1',
                    prevEl: '.swiper-button-prev1',
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
                <div className="swiper-button-prev1 btnError cursor-pointer">Prev</div>
                <div className="swiper-button-next1 btnSuccess cursor-pointer">Next</div>
            </div>




            <Divider />




            <p>basic slider with paging prev next</p>
            <Swiper
                className="w-[50%] h-[500px] mx-auto mySwiper"
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                modules={[Pagination, Navigation]}
                navigation={{
                    nextEl: '.swiper-button-next0',
                    prevEl: '.swiper-button-prev0',
                }}
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
                <div className="swiper-button-prev0 btnError cursor-pointer">Prev</div>
                <div className="swiper-button-next0 btnSuccess cursor-pointer">Next</div>
            </div>



            <Divider />



            <p>basic slider</p>
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


            <Divider />



            <p>coverflowEffect</p>
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
                modules={[EffectCoverflow, Pagination, Navigation]}
                pagination={{ clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next2',
                    prevEl: '.swiper-button-prev2',
                }}
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
                <div className="swiper-button-prev2 btnError cursor-pointer">Prev</div>
                <div className="swiper-button-next2 btnSuccess cursor-pointer">Next</div>
            </div>




            <Divider />




            <p>cardsEffect</p>
            <Swiper
                className="w-1/3 mx-auto mySwiper"
                spaceBetween={30}
                loop={true}
                grabCursor={true}
                effect={'cards'}
                modules={[EffectCards, Navigation]}
                navigation={{
                    nextEl: '.swiper-button-next3',
                    prevEl: '.swiper-button-prev3',
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
                <div className="swiper-button-prev3 btnError cursor-pointer">Prev</div>
                <div className="swiper-button-next3 btnSuccess cursor-pointer">Next</div>
            </div>



            <Divider />



            <p>cubeEffect</p>
            <Swiper
                className="w-1/3 mx-auto mySwiper"
                effect={'cube'}
                grabCursor={true}
                spaceBetween={30}
                loop={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                modules={[EffectCube, Pagination, Navigation]}
                navigation={{
                    nextEl: '.swiper-button-next4',
                    prevEl: '.swiper-button-prev4',
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
                <div className="swiper-button-prev4 btnError cursor-pointer">Prev</div>
                <div className="swiper-button-next4 btnSuccess cursor-pointer">Next</div>
            </div>

            <Divider />


        </div>
    );
}

export default HorizontalList