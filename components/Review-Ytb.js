import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';
import { YouTbIcon } from '../image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
function ReviewYtb() {
    // Array link video Youtube
    const listLink = ['tU0u5b6pvqI', '3Y93D4gd88U', 'WWp9V92pfCg', '_HYXj85_0WQ', '9akWMk1YJjE'];
    return (
        <div className="px-[15px] my-4 tablet:mt-10 tablet:mb-20">
            <div className="text-[22px] tablet:text-[26px] text-primary flex items-center my-10 font-bold">
                <YouTbIcon className="max-h-[34px] tablet:h-[34px]" />
                <h1 className="ml-5 font-bold">CHIA SẺ - REVIEW SẢN PHẨM</h1>
                <span className="hidden tablet:block border-[1px] border-solid border-primary grow ml-5"></span>
            </div>
            <div className="relative">
                <Swiper
                    slidesPerView={1}
                    centeredSlides={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                    autoplay={{
                        delay: 7500,
                    }}
                    loop={true}
                    navigation={{
                        nextEl: '.arrow-right',
                        prevEl: '.arrow-left',
                    }}
                    breakpoints={{ 768: { slidesPerView: 2, spaceBetween: 50 } }}
                >
                    {listLink.map((link) => {
                        return (
                            <SwiperSlide key={link}>
                                <div className="border-[4px] border-solid border-primary h-[200px] tablet:h-[270px]">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${link}`}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <div className="arrow-left absolute top-[39%] left-2 text-[35px] text-primary z-20 cursor-pointer">
                    <FontAwesomeIcon icon={faCircleArrowLeft} />
                </div>
                <div className="arrow-right absolute top-[39%] right-2 text-[35px] text-primary z-20 cursor-pointer">
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                </div>
            </div>
        </div>
    );
}

export default ReviewYtb;
