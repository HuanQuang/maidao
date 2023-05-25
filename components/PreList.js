import Product from './Product';
import { data } from '../util/Jsondata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
function PreList() {
    return (
        <div className="my-4 tablet:my-10">
            <div className="text-[22px] tablet:text-[26px] text-primary flex items-center my-2 mb-5 px-[15px]">
                <FontAwesomeIcon icon={faList} className="min-w-[22px] max-h-[34px] tablet:h-[34px]" />
                <h1 className="ml-5 font-bold">THẢO MỘC TIẾN HẠNH</h1>
                <span className="hidden tablet:block border-[1px] border-solid border-primary grow ml-5"></span>
            </div>
            <div className="flex w-full flex-wrap">
                {data.slice(0, 4).map((item) => {
                    return (
                        <div className="w-1/2 tablet:w-1/3 laptop:w-1/4" key={item._id}>
                            <Product data={item} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default PreList;
