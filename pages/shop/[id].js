import { useState } from 'react';
import Link from 'next/link';
import Form from '../../components/Form';
import DefaultLayOut from '../../components/LayOut/Default';
import ListOther from '../../components/ListOther';
import { data } from '../../util/Jsondata';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faFeatherPointed, faCircleQuestion, faVideo } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
function Detail() {
    const [modal, setModal] = useState(false);
    const router = useRouter();
    const id = router.query.id;
    const product = data.find((item) => item._id === id);
    const [currentImg, setCurrentImg] = useState();
    const handleModal = () => {
        setModal(true);
    };
    const handleCloseModal = (value) => {
        setModal(value);
    };
    return (
        <DefaultLayOut>
            <div className="text-primary px-[15px]">
                <div className="flex text-sm tablet:mb-5 border-b-[1px] border-solid border-[#0080002b] pb-2">
                    <Link className="" href={'/'}>
                        Trang chủ
                    </Link>
                    <span className="mx-2">{'>>'}</span>
                    <Link className="" href={'/shop'}>
                        Tất Cả Sản Phẩm
                    </Link>
                    <span className="mx-2">{'>>'}</span>
                    <span>{product?.name}</span>
                </div>
                <div className="w-full flex-col tablet:flex-row flex pt-[15px] pb-10">
                    <div className="tablet:w-2/3 tablet:pr-[15px] overflow-x-hidden">
                        <div className="flex justify-center bg-[#eee]">
                            <Image
                                className="max-h-[345px] tablet:max-h-[520px] max-w-fit"
                                src={currentImg || product?.image[0]}
                                alt={product?.name}
                            />
                        </div>
                        <div className="h-[103px] my-3">
                            <Swiper
                                slidesPerView={3}
                                breakpoints={{
                                    600: { slidesPerView: 5, spaceBetween: 20 },
                                    768: { slidesPerView: 6, spaceBetween: 20 },
                                }}
                            >
                                {product &&
                                    product?.image.map((image) => {
                                        return (
                                            <SwiperSlide key={image}>
                                                <Image
                                                    className={`h-full w-[80px] cursor-pointer ${
                                                        currentImg === image ? 'opacity-100' : 'opacity-50'
                                                    }`}
                                                    src={image}
                                                    alt={product?.name}
                                                    onClick={() => setCurrentImg(image)}
                                                />
                                            </SwiperSlide>
                                        );
                                    })}
                            </Swiper>
                        </div>
                    </div>
                    <div className="tablet:w-1/3 pt-[10px] tablet:pl-[15px]">
                        <h1 className="mb-[14px] text-2xl font-bold text-center">{product?.name}</h1>
                        <span className="block border-[1.5px] border-solid mx-auto w-8 my-4 border-[#0000001a]"></span>
                        <div className="flex justify-around items-center">
                            <div className="flex">
                                <FontAwesomeIcon icon={faStar} color={'#ff9600'} />
                                <FontAwesomeIcon icon={faStar} color={'#ff9600'} />
                                <FontAwesomeIcon icon={faStar} color={'#ff9600'} />
                                <FontAwesomeIcon icon={faStar} color={'#ff9600'} />
                                <FontAwesomeIcon icon={faStar} color={'#ff9600'} />
                            </div>
                            <span>|</span>
                            <span>Đánh giá: 0</span>
                        </div>
                        <span className="my-3 text-2xl text-[#c90927] font-bold block text-center">
                            Giá:{' '}
                            {product?.price.toLocaleString('vi-VN', {
                                style: 'currency',
                                currency: 'VND',
                            })}
                        </span>
                        <div className="mb-5"></div>
                        <div
                            className="text-center text-[#ffffff] backgroundBtn font-bold text-lg py-[9px] mb-5 rounded cursor-pointer"
                            onClick={handleModal}
                        >
                            Mua ngay
                            <span className="block text-sm mt-[2px]">Gọi điện xác nhận và giao hàng tận nơi</span>
                        </div>
                        <div className="py-[5px] text-[#424242] text-[13px] text-center border-y-[1px] border-dotted border-y-[#ddd]">
                            Danh mục: <span className="text-[#014601]">{product?.category}</span>
                        </div>
                        <div className="py-[5px] text-[#424242] text-[13px] text-center border-b-[1px] border-dotted border-b-[#ddd]">
                            Từ khoá: <span className="text-[#014601]">{product?.keyWord.toString()}</span>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h1 className="mb-5 text-[#424242]">{product?.overView && product.overView.title}</h1>
                    {product?.overView?.image && <Image src={product?.overView.image} alt={product.overView.title} />}
                    {product?.description?.map((item) => {
                        return (
                            <div className="mb-3 tablet:mb-10" key={item.name}>
                                <div className="flex items-center">
                                    <FontAwesomeIcon
                                        icon={faFeatherPointed}
                                        className="text-[32px] mr-4 pb-2"
                                    ></FontAwesomeIcon>
                                    <h2 className="pb-2 my-6 text-[26px] uppercase font-bold text-primary border-b-2 border-solid border-[#0000001a]">
                                        {item.name}
                                    </h2>
                                </div>
                                {item.des.map((item) => {
                                    return (
                                        <div className="mb-5 text-[#424242]" key={item}>
                                            <>&#8226; {item}</>
                                        </div>
                                    );
                                })}
                                {item.image && <Image src={item.image} alt={product?.name} className="mx-auto" />}
                            </div>
                        );
                    })}
                    {product?.question?.map((item) => {
                        return (
                            <div className="mb-3 tablet:mb-10" key={item.q}>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faCircleQuestion} className="text-[32px] mr-4 pb-2" />
                                    <h2 className="pb-2 my-6 text-lg tablet:text-[26px] uppercase font-bold text-primary border-b-2 border-solid border-[#0000001a]">
                                        {item.q}
                                    </h2>
                                </div>
                                {item.a.map((item) => {
                                    return (
                                        <div className="mb-5 text-[#424242]" key={item}>
                                            {item}
                                        </div>
                                    );
                                })}
                                {item.image && <Image src={item.image} alt={product?.name} className="mx-auto" />}
                            </div>
                        );
                    })}
                    {product?.review && (
                        <div className="mb-10">
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faVideo} className="text-[32px] mr-4 pb-2" />
                                <h2 className="pb-2 my-6 text-lg tablet:text-[26px] uppercase font-bold text-primary border-b-2 border-solid border-[#0000001a]">
                                    Thông tin thêm về sản phẩm
                                </h2>
                            </div>

                            <div className="h-52 tablet:h-[500px] border-[4px] border-solid border-primary">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${product.review.url}`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </div>
                    )}
                </div>
                <div className="w-full my-10">
                    <div className="flex items-center mb-10">
                        <FontAwesomeIcon icon={faClipboard} className="text-[32px] mr-4 pb-2" />
                        <h1 className="pb-2 text-lg tablet:text-[26px] uppercase font-bold text-primary border-b-2 border-solid border-[#0000001a]">
                            Sản phẩm tương tự
                        </h1>
                    </div>
                    <ListOther />
                </div>
                <Form state={modal} data={product} func={handleCloseModal} />
            </div>
        </DefaultLayOut>
    );
}

export default Detail;
