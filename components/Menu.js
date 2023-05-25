import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { EmailIcon, TikTokIcon, YoutubeIcon, FbIcon } from '../image/index';
import Product2 from './Product2';
import useDebounce from '@/util/debounceHook';
import { data } from '../util/Jsondata';
import { useState, useEffect } from 'react';
function Menu({ props, func }) {
    const [search, setSearch] = useState('');
    const [result, setResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const debounce = useDebounce(search, 500);
    useEffect(() => {
        const value = debounce
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .trim();
        if (value) {
            const result = data.filter((item) =>
                item.name
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                    .toLowerCase()
                    .includes(value),
            );
            setResult(result);
        } else setResult([]);
    }, [debounce]);
    const handleClose = () => {
        func(false);
    };
    return (
        <div
            className={`fixed top-0 left-0 bottom-0 w-[260px]  bg-[#fffffff2]  ${
                props ? 'translate-x-0' : 'translate-x-[-260px]'
            } duration-100 tablet:hidden overflow-y-scroll`}
        >
            <FontAwesomeIcon
                icon={faXmark}
                className="absolute top-2 right-[10px] py-1 px-[6px] cursor-pointer"
                onClick={handleClose}
            />
            <div className="p-5 mt-[45px]">
                <div className="relative">
                    <input
                        className="border-[1px] w-full shadow-inner border-solid border-[#ddd] h-10 bg-[#fff] text-[#333] p-1 text-xs pl-8"
                        type="text"
                        placeholder="Tìm kiếm...    "
                        onChange={(e) => setSearch(e.target.value)}
                        onFocus={() => setShowResult(true)}
                    ></input>
                    <div className=" absolute left-[10px] top-[9px]">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-primary" />
                    </div>
                </div>
            </div>
            {result.length !== 0 && showResult && (
                <div className="shadow-xl bg-[#fff] w-full px-3 py-2">
                    <div className="mb-2 flex justify-between">
                        <h1>Kết quả tìm kiếm</h1>
                        <FontAwesomeIcon
                            icon={faXmark}
                            className="cursor-pointer"
                            onClick={() => setShowResult(false)}
                        />
                    </div>
                    {result.map((item) => {
                        return (
                            <div className="h-[100px] mb-2" key={item._id}>
                                <Product2 data={item} />
                            </div>
                        );
                    })}
                </div>
            )}
            <Link
                href={'/'}
                className="pl-5 py-[15px] font-bold text-[13px] border-t-[1px] border-solid border-t-[#ececec] block"
            >
                TRANG CHỦ
            </Link>
            <Link
                href={'/shop'}
                className="pl-5 py-[15px] font-bold text-[13px] border-t-[1px] border-solid border-t-[#ececec] block"
            >
                SẢN PHẨM
            </Link>
            <Link
                href={'/about'}
                className="pl-5 py-[15px] font-bold text-[13px] border-t-[1px] border-solid border-t-[#ececec] block"
            >
                GIỚI THIỆU
            </Link>
            <div className="gap-5 pl-5 py-[15px] font-bold text-[13px] border-t-[1px] border-solid border-t-[#ececec] flex">
                <Link
                    href={'https://www.facebook.com/dao.maile'}
                    className="border-[1px] text-[#018231] border-solid border-primary rounded-full flex items-center justify-center w-8 h-8"
                >
                    <FbIcon className={'h-[18px] text-primary'} />
                </Link>
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
        </div>
    );
}

export default Menu;
