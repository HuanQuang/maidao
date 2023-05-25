import DefaultLayOut from '../components/LayOut/Default';
import Head from 'next/head';
import { introduce } from '../image/index';
import Image from 'next/image';
function About() {
    return (
        <div>
            <Head>
                <title>Mai Anh Đào - Tăng Giảm Cân Tiến Hạnh Chính Hãng</title>
                <meta name="description" content="Các sản phẩm Tăng, giảm cân từ thảo mộc" />
                <meta property="og:title" content="Mai Anh Đào - Tăng Giảm Cân Tiến Hạnh Chính Hãng" />
                <meta property="og:description" content="Mai Anh Đào - Tăng Giảm Cân Tiến Hạnh Chính Hãng" />
                <meta property="og:type" content="website"></meta>
            </Head>
            <DefaultLayOut>
                <div className="text-primary tablet:py-7">
                    <div className="text-center text-xl font-bold tablet:text-[27px] tablet:mb-6">
                        SHOP MAI ANH ĐÀO - THẢO MỘC TĂNG GIẢM CÂN CHÍNH HÃNG
                    </div>
                    {introduce.map((item, i) => {
                        return (
                            <div className="flex-col tablet:flex-row flex my-10 tablet:my-20 px-4" key={i}>
                                <Image
                                    src={item.image}
                                    alt=" MAI ANH ĐÀO - THẢO MỘC TĂNG GIẢM CÂN CHÍNH HÃNG"
                                    className="w-full tablet:w-1/2 "
                                />
                                <div className="w-full tablet:w-1/2 tablet:ml-4">
                                    {item.intro.map((p, i) => {
                                        return <p key={i}>{p}</p>;
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </DefaultLayOut>
            ;
        </div>
    );
}

export default About;
