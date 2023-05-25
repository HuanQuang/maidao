import Product from '../../components/Product';
import LayoutShop from '../../components/LayOut/LayoutShop';
import { data } from '../../util/Jsondata';
function GiamCan() {
    const list = data.filter((item) => item.category === 'Giảm Cân');
    return (
        <LayoutShop props={2}>
            <div className="w-full flex flex-wrap">
                {list.map((item) => {
                    return (
                        <div className="w-1/3" key={item._id}>
                            <Product data={item} />
                        </div>
                    );
                })}
            </div>
        </LayoutShop>
    );
}

export default GiamCan;
