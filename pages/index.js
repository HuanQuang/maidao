import DefaultLayOut from '../components/LayOut/Default';
import Slide from '../components/Slide';
import Certifycation from '../components/Certifycation';
import Ingredient from '../components/Ingredient';
import PreList from '../components/PreList';
import ReviewYtb from '../components/Review-Ytb';
import Head from 'next/head';
import News from '@/components/News';
function Home() {
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
                <Slide />
                <PreList />
                <ReviewYtb />
                <News />
                <Ingredient />
                <Certifycation />
            </DefaultLayOut>
        </div>
    );
}

export default Home;
