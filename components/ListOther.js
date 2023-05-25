import Product from './Product';
import { data } from '../util/Jsondata';
function ListOther() {
    return (
        <div className="flex w-full flex-wrap">
            {data.map((data) => {
                return (
                    <div className="w-1/2 tablet:w-1/3 laptop:w-1/4" key={data._id}>
                        <Product data={data} />
                    </div>
                );
            })}
        </div>
    );
}

export default ListOther;
