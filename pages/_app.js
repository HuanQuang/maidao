import '@/styles/globals.css';
import 'swiper/css';
// import 'react-toastify/dist/ReactToastify.css';
import { Roboto_Condensed } from 'next/font/google';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
const Roboto = Roboto_Condensed({
    weight: ['300', '400', '700'],
    subsets: ['latin'],
});
export default function App({ Component, pageProps }) {
    return (
        <main className={Roboto.className}>
            <Component {...pageProps} />
        </main>
    );
}
