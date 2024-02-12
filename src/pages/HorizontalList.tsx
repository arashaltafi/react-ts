import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import { EffectCards, EffectCoverflow, Pagination, Navigation, EffectCube } from 'swiper/modules';
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import Divider from '../Components/Divider';
import { useRef, useState } from 'react';
import { useSpringCarousel } from 'react-spring-carousel'
const Coverflow = require('react-coverflow');

//npm install swiper react-spring-3d-carousel
//npm install react-round-carousel
//npm install react-coverflow

const HorizontalList = () => {
    const [items, setItems] = useState<string[]>([
        'test 1',
        'test 2',
        'test 3',
        'test 4',
        'test 5',
        'test 6',
        'test 7',
        'test 8',
        'test 9',
        'test 10',
        'test 11',
        'test 12',
        'test 13',
        'test 14',
        'test 15',
        'test 16',
        'test 17',
        'test 18',
        'test 19',
        'test 20',
        'test 21',
        'test 22',
        'test 23',
        'test 24',
        'test 25',
        'test 26',
        'test 27',
        'test 28',
        'test 29',
        'test 30',
        'test 31',
        'test 32',
        'test 33',
        'test 34',
        'test 35',
        'test 36',
        'test 37',
        'test 38',
        'test 39',
        'test 40',
    ])

    const handleOnClick = () => {

    }

    const handleOnKeyDown = () => {

    }


    const containerRef1 = useRef<HTMLDivElement>(null);
    const [isDragging1, setIsDragging1] = useState(false);
    const [startX1, setStartX1] = useState(0);
    const [scrollLeft1, setScrollLeft1] = useState(0);

    const handleMouseDown1 = (event: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging1(true);
        setStartX1(event.pageX - (containerRef1.current?.offsetLeft || 0));
        setScrollLeft1(containerRef1.current?.scrollLeft || 0);
    };

    const handleMouseMove1 = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging1 || !containerRef1.current) return;
        const x = event.pageX - (containerRef1.current.offsetLeft || 0);
        const walk = (x - startX1) * 2; // Adjust the scrolling speed if needed
        containerRef1.current.scrollLeft = scrollLeft1 - walk;
    };

    const handleMouseUp1 = () => {
        setIsDragging1(false);
    };


    const mockItems = [
        {
            id: 'item-1',
            title: 'slide 1'
        },
        {
            id: 'item-2',
            title: 'slide 2'
        },
        {
            id: 'item-3',
            title: 'slide 3'
        },
        {
            id: 'item-4',
            title: 'slide 4'
        }
    ]
    const [currentSlide, setCurrentSlide] = useState(mockItems[0].id)

    const {
        carouselFragment,
        slideToPrevItem, // go back to previous slide
        slideToNextItem, // move to next slide
        useListenToCustomEvent //custom hook to listen event when the slide changes
    } = useSpringCarousel({
        itemsPerSlide: 3, // number of slides per view
        withLoop: true, // will loop
        initialStartingPosition: 'center', // the active slide will be at the center
        gutter: 24, // to add the space between slides
        items: mockItems.map((item) => {
            return {
                ...item,
                renderItem: (
                    <div
                        className={`grid aspect-[2] w-full place-items-center text-2xl text-white transition-all duration-700 rounded-lg ${currentSlide === item.id
                            ? 'z-10 scale-150 bg-sky-600'
                            : 'bg-pink-500'
                            }`}>
                        {item.title}
                    </div>
                )
            }
        })
    })

    useListenToCustomEvent((event: any) => {
        if (event.eventName === 'onSlideStartChange') {
            setCurrentSlide(event?.nextItem?.id)
        }
    })


    return (
        <div className='flex flex-col items-center justify-center gap-16 py-16 overflow-x-hidden'>
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


            <div
                ref={containerRef1}
                onMouseDown={handleMouseDown1}
                onMouseMove={handleMouseMove1}
                onMouseUp={handleMouseUp1}
                onMouseLeave={handleMouseUp1}
                className='select-none w-[90%] sm:w-3/4 md:w-2/3 lg:w-1/2 flex items-center justify-start gap-8 bg-sky-500 overflow-x-auto cursor-grab overflow-y-hidden scrollbar-hide'
            >
                {
                    items.map((item, index) => (
                        <p key={index} className='bg-red-500 text-white rounded-lg px-4 py-2 text-center'>{item}</p>
                    ))
                }
            </div>



            <Divider />



            <div className="py-20 relative select-none">
                <button
                    onClick={slideToPrevItem}
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-full left-[5%] btnSuccess bg-red-500"
                >
                    Preview
                </button>
                <div className="mx-auto w-[80%] overflow-x-clip py-[4%] relative">
                    {carouselFragment}
                </div>
                <button
                    onClick={slideToNextItem}
                    className="absolute top-1/2 -translate-y-1/2 translate-x-full right-[5%] btnSuccess bg-green-500"
                >
                    Next
                </button>
            </div>


        </div>
    );
}

export default HorizontalList