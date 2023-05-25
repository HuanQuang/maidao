import Image from 'next/image';
import { CertifycationImage, MedalIcon } from '../image/index';
function Certifycation() {
    return (
        <div className="my-10 text-primary">
            <div className="text-[22px] tablet:text-[26px] flex items-center my-2 mb-5 px-[15px] font-bold">
                <MedalIcon className="min-w-[22px] max-h-[34px] tablet:h-[34px]" />
                <h1 className="ml-5 font-bold">SẢN PHẨM ĐƯỢC BỘ Y TẾ KIỂM DUYỆT VÀ CẤP TEM CHỐNG HÀNG GIẢ</h1>
                <span className="border-[1px] border-solid border-primary grow ml-5 hidden tablet:block"></span>
            </div>
            <p className="text-center px-5">
                TĂNG GIẢM CÂN TIẾN HẠNH CHÍNH HÃNG vinh dự được nhận giải thưởng sản phẩm vì sức khỏe người tiêu dùng.
                Được cấp giấy chuẩn bộ y tế, GMP
            </p>
            <div className="flex flex-wrap">
                {CertifycationImage.map((image, i) => {
                    return (
                        <Image
                            key={i}
                            className="w-full tablet:w-1/2 laptop:w-1/3 p-5"
                            src={image}
                            alt="Chứng nhận của bộ y tế và tem chống hàng giả"
                        ></Image>
                    );
                })}
            </div>
        </div>
    );
}

export default Certifycation;
