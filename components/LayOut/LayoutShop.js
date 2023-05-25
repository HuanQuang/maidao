import DefaultLayOut from './Default';
import Link from 'next/link';
function LayoutShop({ children, props }) {
    return (
        <div>
            <DefaultLayOut>
                <div className="text-primary">
                    <div className="flex text-sm mb-5 border-b-[1px] border-solid border-[#0080002b] pb-2 px-[15px]">
                        <Link className="" href={'/'}>
                            Trang chủ
                        </Link>
                        <span className="mx-2">{'>>'}</span>
                        <span>Sản Phẩm</span>
                    </div>
                    <div className="laptop:flex pt-7 min-h-[400px]">
                        <div className="hidden laptop:block w-1/4 px-[15px]">
                            <h1 className="text-base text-[#424242] font-bold">DANH MỤC SẢN PHẨM</h1>
                            <span className="w-3/4 block border-[1px] border-dashed border-primary"></span>
                            <div className="my-4 text-base text-[#014601]">
                                <Link
                                    href={'/shop'}
                                    className={`hover:text-[#c10000] block pb-2 my-[6px] border-b-[1px] border-solid border-[#0080002b] ${
                                        props === 0 ? 'text-[red]' : ''
                                    }`}
                                >
                                    Tất Cả Sản Phẩm
                                </Link>
                                <Link
                                    href={'/shop/tang-can'}
                                    className={`hover:text-[#c10000] block pb-2 my-[6px] border-b-[1px] border-solid border-[#0080002b] ${
                                        props === 1 ? 'text-[red]' : ''
                                    }`}
                                >
                                    Thảo Mộc Tăng Cân
                                </Link>
                                <Link
                                    href={'/shop/giam-can'}
                                    className={`hover:text-[#c10000] block pb-2 my-[6px] border-b-[1px] border-solid border-[#0080002b] ${
                                        props === 2 ? 'text-[red]' : ''
                                    }`}
                                >
                                    Thảo Mộc Giảm Cân
                                </Link>
                            </div>
                        </div>
                        <div className="laptop:w-3/4 laptop:pl-[15px]">{children}</div>
                    </div>
                </div>
            </DefaultLayOut>
        </div>
    );
}

export default LayoutShop;
