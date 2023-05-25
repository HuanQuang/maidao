import Footer from '../Footer';
import Head from 'next/head';
import Header from '../Header';
import Messenger from '../Messenger';
function DefaultLayOut({ children }) {
    return (
        <div>
            <Head>
                <title>Mai Anh Đào - Thảo Mộc Tăng Giảm Cân Tiến Hạnh Chính Hãng</title>
                <meta name="description" content="Các sản phẩm Tăng, giảm cân từ thảo mộc" />
                <meta property="og:locale" content="vi_VN" />
                <meta
                    name="description"
                    content="Tiến Hạnh là thương hiệu chuyên bán và gia công TPCN Đông y sản phẩm bí truyền dân tộc Dao độc quyền bởi công ty TNHH Đông Y Gia Truyền Tiến Hạnh trực thuộc Tập Đoàn TH."
                />
                <meta
                    property="og:description"
                    content="Tiến Hạnh là thương hiệu chuyên bán và gia công TPCN Đông y sản phẩm bí truyền dân tộc Dao độc quyền bởi công ty TNHH Đông Y Gia Truyền Tiến Hạnh trực thuộc Tập Đoàn TH."
                />
                <meta property="og:site_name" content="Mai Anh Đào - Thảo Mộc Tăng Giảm Cân Tiến Hạnh Chính Hãng" />
                <meta property="og:title" content="Mai Anh Đào - Tăng Giảm Cân Tiến Hạnh Chính Hãng" />
                <meta property="og:image" content="https://tienhanh.vn/wp-content/uploads/2020/03/tienhanh.jpg" />
                <meta property="og:image:width" content="1342" />
                <meta property="og:image:height" content="650" />
                <meta property="article:publisher" content="https://www.facebook.com/profile.php?id=100063915519088" />
                <meta property="og:description" content="Mai Anh Đào - Tăng Giảm Cân Tiến Hạnh Chính Hãng" />
                <meta property="og:type" content="website"></meta>
            </Head>
            <Header />
            <div className="max-w-[960px] mx-auto pt-20 bg-[#ffffff]">{children}</div>
            <Messenger />
            <Footer />
        </div>
    );
}

export default DefaultLayOut;
