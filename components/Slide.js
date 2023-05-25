import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import Image from 'next/image';
import { SlideImage } from '../image/index';
function Slide() {
    return (
        <div className="w-full px-[15px]">
            <Swiper
                slidesPerView={1}
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
            >
                {SlideImage?.map((slide, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <div className="flex justify-center items-center">
                                <Image
                                    className="max-h-[450px] h-[170px] tablet:h-[346px] laptop:h-[450px]"
                                    src={slide}
                                    alt="Tiến Hạnh"
                                ></Image>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default Slide;
