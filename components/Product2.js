import Link from 'next/link';
import Image from 'next/image';
function Product2({ data }) {
    return (
        <Link href={`/shop/${data?._id}`}>
            <div className="w-full mb-[15px] hover:shadow-md flex h-full">
                <Image className="w-[100px] h-full" src={data?.image[0]} alt="Sản phẩm thảo mộc Tiến Hạnh"></Image>
                <div className="p-[10px]">
                    <div className="tablet:flex pb-5">
                        <div className="tablet:pr-[15px] mb-3">
                            <p className="text-[14.4px] text-[#014601]">{data?.name}</p>
                        </div>
                        <p className="text-[14.4px] font-bold text-[#111111]">
                            {data?.price?.toLocaleString('vi-VN', {
                                style: 'currency',
                                currency: 'VND',
                            })}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Product2;
