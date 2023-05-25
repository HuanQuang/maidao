import { Logo } from '../image/index';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu';
import { data } from '@/util/Jsondata';
import { useState, useEffect } from 'react';
import Product2 from './Product2';
import useDebounce from '@/util/debounceHook';
function Header() {
    const [menu, setMenu] = useState(false);
    const [search, setSearch] = useState('');
    const [result, setResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const handleCloseMenu = (value) => {
        setMenu(value);
    };

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
    return (
        <div className="w-full fixed top-0 left-0 right-0 z-50 h-[65px] shadow-[0_3px_8px_rgba(0,0,0,0.3)] bg-[#f4f4f4]">
            <div className="max-w-[960px] mx-auto flex items-center h-full justify-between px-[15px]">
                <Menu props={menu} func={handleCloseMenu} />
                <div className="tablet:hidden flex items-center">
                    <FontAwesomeIcon
                        icon={faBars}
                        className="p-2 mr-2 cursor-pointer text-xl"
                        onClick={() => setMenu(true)}
                    />
                    <h2 className="text-primary font-semibold text-xl">Tăng Giảm Cân Tiến Hạnh Chính Hãng</h2>
                </div>
                <div className="hidden tablet:flex text-sm gap-2 py-4 text-primary font-bold">
                    <Link href="/" className="">
                        TRANG CHỦ
                    </Link>
                    <Link href="/shop" className="">
                        SẢN PHẨM
                    </Link>
                    <Link href="/about" className="">
                        GIỚI THIỆU
                    </Link>
                </div>
                <Link href={'/'} className="hidden h-full tablet:flex items-center justify-center">
                    <Image alt="logo" className="h-full w-auto" src={Logo}></Image>
                </Link>
                <div className="hidden tablet:flex items-center gap-4 text-primary">
                    <div className="relative">
                        <input
                            className="border-[1px] w-full shadow-inner border-solid border-[#ddd] h-9 rounded bg-[#fff] text-[#333] p-1 text-xs pl-8"
                            type="text"
                            placeholder="Tìm kiếm...    "
                            onChange={(e) => setSearch(e.target.value)}
                            onFocus={() => setShowResult(true)}
                        ></input>
                        <div className=" absolute left-[10px] top-[8px]">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-primary" />
                        </div>
                        {result.length !== 0 && showResult && (
                            <div className="absolute shadow-xl bg-[#fff] w-[290px] px-3 py-2">
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
                    </div>
                    <p className="font-bold">0987.493.391</p>
                </div>
            </div>
            ;
        </div>
    );
}

export default Header;
