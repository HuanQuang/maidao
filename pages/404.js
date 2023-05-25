import { NotFound } from '../image/index';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Error() {
    const router = useRouter();
    return (
        <div className="w-full h-[100vh] relative">
            <Image src={NotFound} alt="notfound" className="w-full h-full" />
            <div
                onClick={() => router.back()}
                className="absolute top-[154px] left-[46%] w-[75px] h-6 cursor-pointer"
            ></div>
        </div>
    );
}

export default Error;
