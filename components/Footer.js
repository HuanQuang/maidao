import { EmailIcon, Logo, MessIcon, TikTokIcon, YoutubeIcon } from '../image/index';
import Image from 'next/image';
import { FbIcon } from '../image/index';
import Link from 'next/link';
function Footer() {
    return (
        <div className="">
            <div className="flex py-7 border-t-[1px] border-solid border-primary text-sm max-w-[960px] mx-auto text-primary">
                <div className="px-4 max-w-[300px] grow">
                    <div className="mb-4 text-base font-bold">THÔNG TIN LIÊN HỆ</div>
                    <p className="mb-4">
                        <strong>Địa chỉ đăng ký:</strong>{' '}
                        <span className="mb-4">Thị Trấn Giát - huyện Quỳnh Lưu - tỉnh Nghệ An</span>
                    </p>
                    <p className="mb-4">
                        <strong>Số điện thoại:</strong>
                        <span className="mb-4"> 0987.493.391</span>
                    </p>
                    <div className="flex gap-5 mb-2">
                        <Link
                            href={'https://www.facebook.com/profile.php?id=100063915519088'}
                            className="border-[1px] text-[#018231] border-solid border-primary rounded-full flex items-center justify-center w-8 h-8"
                        >
                            <FbIcon className={'h-[18px] text-primary'} />
                        </Link>
                        <div className="border-[1px] border-solid border-primary rounded-full flex items-center justify-center w-8 h-8">
                            <MessIcon className={'h-[18px] text-primary'} />
                        </div>
                        <div className="border-[1px] border-solid border-primary rounded-full flex items-center justify-center w-8 h-8">
                            <EmailIcon className={'h-[18px] text-primary'} />
                        </div>
                        <div className="border-[1px] border-solid border-primary rounded-full flex items-center justify-center w-8 h-8">
                            <TikTokIcon className={'h-[18px] text-primary'} />
                        </div>
                        <Link
                            href={'https://www.youtube.com/@thuoctangcanthuocgiamcanma7074'}
                            className="border-[1px] border-solid border-primary rounded-full flex items-center justify-center w-8 h-8"
                        >
                            <YoutubeIcon className={'h-[18px] text-primary'} />
                        </Link>
                    </div>
                    <div className="text-base bg-primary text-[white] font-bold py-3 px-6">HOTLINE: 0987.493.391</div>
                </div>
                <div className="hidden tablet:flex justify-center items-center grow">
                    <Image className="w-[140px] h-[140px]" src={Logo} alt="Tiến Hạnh"></Image>
                </div>
            </div>
        </div>
    );
}

export default Footer;
