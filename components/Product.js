import { useState } from 'react';
import Form from './Form';
import Link from 'next/link';
import Image from 'next/image';
function Product({ data }) {
    const [modal, setModal] = useState(false);
    const handleModal = () => {
        setModal(true);
    };
    const handleCloseModal = (value) => {
        setModal(value);
    };
    return (
        <div>
            <div>
                <div className="w-full mb-[15px] px-[10px] hover:shadow-md">
                    <Link href={`/shop/${data._id}`}>
                        <div className="relative overflow-hidden imageHover">
                            <Image
                                className={`opacity-100 w-full duration-500 activeImage1`}
                                src={data.image[0]}
                                alt="Thảo mộc Tiến Hạnh"
                            ></Image>
                            <Image
                                className={`opacity-0 w-full absolute top-0 left-0 duration-500 activeImage2`}
                                src={data.image[1]}
                                alt="Thảo mộc Tiến Hạnh"
                            ></Image>
                            <p
                                className={`absolute font-bold text-base text-[#fff] bg-primary flex bottom-0 right-0 w-full justify-center leading-7 translate-y-[30px] duration-300 activePreview`}
                            >
                                QUICK VIEW
                            </p>
                        </div>
                    </Link>
                    <div className="p-[10px]">
                        <div className="flex-col tablet:flex-row flex pb-5">
                            <div className="pr-[15px]">
                                <p className="text-[14.4px] text-[#014601] max-h-11 overflow-hidden text-ellipsis">
                                    {data.name}
                                </p>
                            </div>
                            <p className="text-[14.4px] font-bold text-[#111111]">
                                {data.price?.toLocaleString('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND',
                                })}
                            </p>
                        </div>
                        <button
                            className="bg-[#13842c] text-sm text-[#fff] py-[5px] px-[14px] rounded font-bold"
                            onClick={handleModal}
                        >
                            Mua ngay
                        </button>
                    </div>
                </div>
            </div>
            <Form state={modal} data={data} func={handleCloseModal} />
        </div>
    );
}

export default Product;
