import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { listNews, famousList } from '../image/index';
import Image from 'next/image';
import Link from 'next/link';
function News() {
    return (
        <div>
            <div className="my-4 tablet:my-10">
                <div className="text-[22px] tablet:text-[26px] text-primary flex items-center my-5 tablet:my-10 px-[15px]">
                    <FontAwesomeIcon icon={faNewspaper} className="min-w-[22px] max-h-[34px] tablet:h-[34px]" />
                    <h1 className="ml-5 font-bold">BÁO CHÍ NÓI GÌ VỀ TIẾN HẠNH</h1>
                    <span className="hidden tablet:block border-[1px] border-solid border-primary grow ml-5"></span>
                </div>
                <div>
                    <Swiper
                        slidesPerView={1}
                        modules={[Autoplay]}
                        spaceBetween={30}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{ 600: { slidesPerView: 2 }, 768: { slidesPerView: 3 } }}
                    >
                        {listNews?.map((news) => {
                            return (
                                <SwiperSlide key={news.id}>
                                    <div className="h-fit w-fit p-3 shadow-2xl my-4 hover:scale-105 duration-300">
                                        <Image className="mx-auto" src={news.img} alt="Báo chí nói gì về Tiến Hạnh" />
                                        <p className="mx-auto w-4/5 text-center my-4 max-h-[72px] overflow-hidden text-ellipsis font-semibold text-[#333]">
                                            {news.title}
                                        </p>
                                        <Link href={news.src} className="block w-fit mx-auto" target="_blank">
                                            <button className="text-primary px-[14px] py-[3px] border-[1px] border-solid border-primary hover:bg-[#80808025] rounded w-fit">
                                                Chi tiết
                                            </button>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
            <div className="my-4 tablet:my-10">
                <div className="text-[22px] tablet:text-[26px] text-primary flex items-center my-10 px-[15px]">
                    <FontAwesomeIcon icon={faSquareCheck} className="min-w-[22px] max-h-[34px] tablet:h-[34px]" />
                    <h1 className="ml-5 font-bold">SẢN PHẨM ĐƯỢC CÁC NGHỆ SĨ TIN DÙNG</h1>
                    <span className="hidden tablet:block border-[1px] border-solid border-primary grow ml-5"></span>
                </div>
                <Swiper
                    slidesPerView={2}
                    modules={[Autoplay]}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{ 600: { slidesPerView: 4 }, 768: { slidesPerView: 5 } }}
                >
                    {famousList?.map((item, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <Image
                                    className="h-[236px] rounded"
                                    src={item}
                                    alt="Sản phẩm tiến hạnh luôn được tin dùng"
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
}

export default News;
